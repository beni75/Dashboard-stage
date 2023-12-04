import { HttpResponse, http } from "msw";

let users = [];
let newId = 1;

//fonction qui permet de donner un id unique à la création d'un utilisateur
const generateId = () => {
  return newId++;
};

export const handlers = [
  http.get("/api/users", () => {
    if (users.length === 0) {
      return HttpResponse.json(
        { statusText: "Users not found..." },
        { status: 404 }
      );
    } else {
      return HttpResponse.json(users);
    }
  }),

  http.get("/api/users/:id", ({ params }) => {
    const { id } = params;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
      return HttpResponse.json(
        { statusText: "User not found" },
        { status: 404 }
      );
    } else {
      return HttpResponse.json(user);
    }
  }),

  http.post("/api/users/add", async ({ request }) => {
    const requestBody = await request.json();
    const { pseudo, name, email } = requestBody;

    // Vérifier si les champs obligatoires sont présents
    if (!pseudo || !name || !email) {
      return HttpResponse.json(
        { error: "Missing required fields" },
        { statusText: "Please provide all required fields" },
        { status: 400 } // Utilisation du code 400 pour indiquer une mauvaise requête
      );
    }
    // Vérification de la présence de l'arobase dans l'adresse email
    const hasAtSymbol = email.includes("@");

    if (!hasAtSymbol) {
      return HttpResponse.json(
        { error: "Invalid email address" },
        { statusText: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return HttpResponse.json(
        { error: "User already exists" },
        { statusText: "User already exists" },
        { status: 409 } // Utilisation du code 409 pour indiquer un conflit
      );
    } else {
      const newUser = { ...requestBody, id: generateId() };
      users.push(newUser);
      return HttpResponse.json(
        newUser,
        { statusText: "User created successfully" },
        { status: 200 }
      );
    }
  }),

  http.put("/api/users/:id", async ({ request, params }) => {
    const { id } = params;
    const requestBody = await request.json();
    console.log(requestBody); // Vérification du corps de la requête
    const userIndex = users.findIndex((user) => user.id === Number(id));

    if (userIndex === -1) {
      return HttpResponse.json(
        { statusText: "User not found" },
        { status: 404 }
      );
    } else {
      users[userIndex] = { ...users[userIndex], ...requestBody };
      return HttpResponse.json(users[userIndex], { status: 200 });
    }
  }),

  http.delete("/api/users/:id", ({ params }) => {
    const { id } = params;

    const userIndex = users.findIndex((user) => user.id === Number(id));
    console.log(userIndex);

    if (userIndex === -1) {
      return HttpResponse.json(
        { statusText: "User not found" },
        { status: 404 }
      );
    } else {
      users.splice(userIndex, 1);
      return HttpResponse.json({ statusText: "User deleted" }, { status: 200 });
    }
  }),
];
