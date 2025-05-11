# Singularity Backend Test

## Install Dependencies

```bash
$ yarn install
```

## Running the app

```bash
# development watch mode
$ yarn run start:dev

# development
$ yarn run start

# production mode
$ yarn run start:prod
```

Available in [http://localhost:8080](http://localhost:3000) with your browser to see the result.

Available Playground in [http://localhost:8080/graphql](http://localhost:8080/graphql).

### Create user mutation (example)

```bash
mutation {
  registerUser(input: {
    username: "jose123",
    password: "securePass123",
    Name: "José",
    LastName: "García",
    IsMilitar: false,
    isTemporal: false,
    email: "jhhh@mail.com",

    document: {
      Document: "123456789",
      TypeDocumentID: 1, #availables id are 1, 2, 3
      PlaceExpedition: "Bogotá",
      DateExpedition: "2005-06-01"
    },

    contact: {
      Address: "Calle 45 #10-23",
      City: "Medellín",
      Phone: "+5741234567",
      CelPhone: "+573001234567",
      EmergencyName: "María Gómez",
      EmergencyPhone: "+573007654321",
      CountryID: 1 #availables id are 1, 2, 3
    }
  }) {
    id
    username
    Name
    LastName
    email
    document {
      Document
      PlaceExpedition
      DateExpedition
      typeDocument {
        NameTypeDocument
      }
    }
    contact {
      Address
      City
      Phone
      CelPhone
      EmergencyName
      EmergencyPhone
      country {
        CountryName
      }
    }
  }
}
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
