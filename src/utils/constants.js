const constants = {
  monthsToYears: (petAge) => {
    let age = "";
    if (petAge < 12) {
      return (age = `${petAge} meses`);
    } else if (petAge >= 12 && petAge < 24) {
      return (age = `1 año`);
    } else {
      return (age = `${Math.floor(petAge / 12)} años`);
    }
  },

  scrollToTop: () =>
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    }),

  handleScroll: (setShowButton) => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  },

  listenToScrollPosition: (scrollHandler) => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  },

  determineBadgeText: (petSpecies, petSex) => {
    let badgeText = "";
    switch (petSpecies) {
      case "dog":
        petSex === "male" ? (badgeText = "perro") : (badgeText = "perra");
        break;

      case "cat":
        petSex === "male" ? (badgeText = "gato") : (badgeText = "gata");
        break;

      case "other":
        petSex === "male" ? (badgeText = "otro") : (badgeText = "otra");
        break;
    }
    return badgeText;
  },
};
export default constants;
