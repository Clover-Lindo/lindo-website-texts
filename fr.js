export default {
  dofus_touch: "Dofus Touch",
  menu: {
    lindo: "Lindo",
    help: "Aide",
    discord: "Discord",
    github: "GitHub"
  },
  index: {
    page: {
      title: "Lindo No-Emu, pour Dofus Touch",
      description: "Joue à Dofus Touch depuis Windows / Mac OS / Linux, plus rapide et plus fluide qu'un émulateur"
    },
    description: "Joue à {dofus_touch} sur Windows / Mac OS / Linux",
    cta: {
      download: "Télécharger",
      info: "Qu'est-ce que Lindo ?"
    },
    feature: {
      fast: {
        title: "Plus rapide qu'un émulateur",
        description: "Lindo est un \"No-Emu\". Il n'est pas dépendant d'un émulateur Android ou de la puissance de l'éliacube pour faire tourner Dofus Touch. Donc pas besoin d'une grosse config pour faire tourner Dofus Touch sur un ordinateur."
      },
      shortcuts: {
        title: "Avec des raccourcis clavier",
        description: "On sait que t'as besoin d'aller vite, et on a pensé à toi. Tu peux sélectionner tes sorts au clavier, accéder aux menus, passer ton tour en combat et même décliner l'invitation de ton pote relou. Tout raccourci est personnalisable bien entendu."
      },
      open_source: {
        title: "Open Source",
        description: "Lindo est un logiciel ouvert et communautaire, tout le monde peut voir de quoi il est fait et contribuer à son développement en allant sur {github}. La sécurité de son compte c'est important. Vraiment. Et si t'es toujours pas convaincu tu peux toujours passer nous dire bonjour sur {discord}.",
        github: "GitHub",
        github_url: "https://github.com/prixe/lindo",
        discord: "Discord",
        discord_url: "https://discord.gg/wcCgtsv"
      }
    },
    team: {
      title: "Contributeurs"
    },
    footer: {
      disclaimer: "Ce logiciel est interdit par Ankama, comme expliqué dans leur {tos}, Article 5.2, incluant son usage et la contribution à son développement. Gardez à l'esprit d'en faire un usage qui soit juste pour tout le monde, évitez d'avoir un comportement qui pourrait être toxique envers le jeu ou vous prendrez le risque de voir votre compte clôturé.",
      tos_url: "https://www.dofus-touch.com/fr/cgu",
      tos_text: "Conditions Générales d'Utilisation",
      copyright: "© 2020 L'équipe Lindo",
      credits: "Site créé par {clover}.",
      clover_url: "https://github.com/Clover-Lindo",
      clover_text: "Clover",
      credits_ankama: "L'image de fond, les personnages et le jeu Dofus Touch dans sa totalité sont les propriétés intellectuelles d'{ankama}.",
      ankama_url: "https://www.ankama.com/",
      ankama_text: "Ankama"
    }
  },
  help: {
    page: {
      title: "Aide - Lindo No-Emu, pour Dofus Touch",
      description: "Aide et questions fréquemment posées sur Lindo. Joue à Dofus Touch depuis Windows / Mac OS / Linux, plus rapide et plus fluide qu'un émulateur"
    },
    title: "Besoin d'aide ? Une question ?",
    search_placeholder: "Rechercher",
    discord_title: "Vous n'avez pas trouvé votre réponse ? Demandez-nous sur Discord !",
    sections: {
      webgl: {
        title: "\"Votre appareil n'est pas compatible WebGL\"",
        text: "Ce message indique que ta carte graphique n'est pas compatible avec WebGL, technologie de rendu utilisée par Dofus Touch. C'est possible de résoudre ce problème en mettant à jour les pilotes de ta carte graphique. Si ça ne marche toujours pas, il faudra opter pour une carte graphique plus récente."
      },
      smartscreen: {
        title: "Windows SmartScreen empêche le démarrage de l'application",
        text: "Windows peut parfois afficher ce message parce que l'application n'est pas officiellement certifiée par un éditeur connu. Tu peux ignorer ce message en cliquant sur \"Informations complémentaires\"."
      },
      white_screen: {
        title: "Mon écran devient blanc après un moment en jeu",
        text: "Ça peut arriver après avoir laissé Lindo ouvert un certain temps. Si tu joues avec plusieurs comptes en même temps, essaie de les séparer dans différentes fenêtres."
      },
      servers: {
        title: "Est-ce que je peux jouer avec mes amis qui sont sur tablette ou smartphone ?",
        text: "Oui ! En fait Lindo exécute la même version de Dofus Touch et se connecte aux mêmes serveurs. Donc tu joueras avec tous les autres joueurs qui jouent depuis une plateforme mobile."
      },
      allowed: {
        title: "Lindo est autorisé par Ankama ?",
        text: "Malheureusement, non. Il est toléré dans une certaine mesure, mais si tu joues à plusieurs comptes simultanément, ou que tu utilises les fonctionnalités supplémentaires comme le suivi de personnage automatique (à activer manuellement dans les options de Lindo), Ankama sera moins tolérant et tu prendras alors des risques supplémentaires."
      },
      update: {
        title: "La mise à jour est interminable",
        text: `Si tu rencontres des problèmes lors de la mise à jour de Dofus Touch, supprime le dossier contenant les fichiers du jeu. C'est l'un des dossiers suivants:

Windows : <code>%appdata%\\lindo</code> (tape l'adresse dans la barre de recherche Windows)
Mac : <code>~/Library/Application Support/lindo/</code>
Linux : <code>~/.config/lindo</code>`
      }
    }
  },
  downloads: {
    changelog: "Changelog"
  }
}
