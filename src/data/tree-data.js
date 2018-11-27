let persons = [
  {
    name: "Manager A-1",
    position: "avatar.png",
    projects: "Sophos, Hilti",
    parent: null,
    children: [],
  },
  {
    name: "Manager B-1",
    position: "avatar.png",
    projects: "Sophos, Hilti",
    parent: "Manager A-1",
    children: [],
  },
  {
    name: "Manager C-1",
    position: "avatar.png",
    projects: "Sophos, Hilti",
    parent: "Manager B-1",
    children: [],
  },
  {
    name: "Manager B-2",
    position: "avatar.png",
    projects: "Sophos, Hilti",
    parent: "Manager A-1",
    children: [],
  },
  {
    name: "Manager B-3",
    position: "avatar.png",
    projects: "Sophos, Hilti",
    parent: "Manager A-1",
    children: [],
  },
  {
    name: "Manager C-2",
    position: "avatar.png",
    projects: "Sophos, Hilti",
    parent: "Manager B-3",
    children: [],
  },
  {
    name: "Manager D-2",
    position: "avatar.png",
    projects: "Sophos, Hilti",
    parent: "Manager C-2",
    children: [],
  },
  {
    name: "Manager B-4",
    position: "avatar.png",
    projects: "Sophos, Hilti",
    parent: "Manager A-1",
    children: [],
  }
];

export {persons};