const particleConfig = {
  particles: {
    number: {
      value: 10, // Jumlah partikel yang lebih sedikit untuk efek garis
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff9800", // Warna partikel
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false, // Nonaktifkan garis yang menghubungkan partikel
    },
    move: {
      enable: true,
      speed: 2, // Kecepatan partikel
      direction: "right", // Arah bergerak ke kanan
      random: false,
      straight: true, // Bergerak lurus
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false, // Nonaktifkan interaksi hover
      },
      onclick: {
        enable: false, // Nonaktifkan interaksi klik
      },
      resize: true,
    },
  },
  retina_detect: true,
};

export default particleConfig;
