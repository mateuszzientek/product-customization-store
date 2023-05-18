import i18n from "i18next";

const comments = [
  {
    id: 1,
    text: i18n.t("comments.1"),
    name: "Olivia H.",
    avatar: "avatar1",
    rating: 5,
  },
  {
    id: 2,
    text: i18n.t("comments.2"),
    name: "Emily M.",
    avatar: "avatar2",
    rating: 5,
  },
  {
    id: 3,
    text: i18n.t("comments.3"),
    name: "Ethan T.",
    avatar: "avatar3",
    rating: 5,
  },
  {
    id: 4,
    text: i18n.t("comments.4"),
    name: "Ryan P.",
    avatar: "avatar4",
    rating: 5,
  },
  {
    id: 5,
    text: i18n.t("comments.5"),
    name: "William E.",
    avatar: "avatar5",
    rating: 5,
  },
  {
    id: 6,
    text: i18n.t("comments.6"),
    name: "Jackson L.",
    avatar: "avatar6",
    rating: 5,
  },
  {
    id: 7,
    text: i18n.t("comments.7"),
    name: "Benjamin H.",
    avatar: "avatar7",
    rating: 5,
  },
  {
    id: 8,
    text: i18n.t("comments.8"),
    name: "Oliver S.",
    avatar: "avatar8",
    rating: 5,
  },
  {
    id: 9,
    text: i18n.t("comments.9"),
    name: "Charlotte M.",
    avatar: "avatar9",
    rating: 5,
  },
];

i18n.on("languageChanged", () => {
  comments.forEach((comment) => {
    if (i18n.exists(`comments.${comment.id}`)) {
      comment.text = i18n.t(`comments.${comment.id}`);
    }
  });
});

export default comments;
