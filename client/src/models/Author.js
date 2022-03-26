// class Author {
//   constructor(data = {}) {
//     Object.assign(
//       this,
//       {
//         type: "",
//         id: "",
//         name: "",
//         avatar: "",
//         headline: "",
//       },
//       data
//     );
//   }
// }

// export { Author };

class Author {
  constructor(data = {}) {
    Object.assign(
      this,
      {
        id: "",
        type: "",
        name: "",
        avatar_url: "",
      },
      data
    );
  }
}

export { Author };
