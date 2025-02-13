import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Board Games Arena",
    breif:
      "A C++ project featuring four board games with Player vs Player and computer gameplay using random-move algorithms.",
    image: "/XO.png",
    tech: ["C++", "OOP", "Algorithms"],
    github: "https://github.com/mohamedwdm/Board-Games-Arena.git",
    details: {
      descreption:
        "This C++ project is Board Game Arena, featuring four games: Classic Tic-Tac-Toe (3x3), 5x5 Tic-Tac-Toe, Connect 4, and a custom Pyramid Tic-Tac-Toe. Players can choose between Player vs Player mode or challenge the computer, which makes moves using a random-move algorithm for unpredictable gameplay. The project is designed with a modular structure, making it scalable and maintainable, while the console-based interface ensures a clean and user-friendly experience. This project showcases my expertise in C++ programming, algorithm design, and game logic implementation.",
    },
  },
  {
    title: "SkyCast App",
    breif: "SkyCast: A simple Flutter weather app with real-time updates, dynamic theming, and state management using Cubit",
    image: "/weather1.png",
    tech: ["Flutter", "Dart", "REST APIs" , "Cubit (Bloc)","Dynamic Theming",/*"Responsive UI Design "*/],
    github: "https://github.com/mohamedwdm/SkyCast_Weather_App_SourceCode.git",
    live: "https://mohamedwdm.github.io/SkyCast_Weather_App_hosting/",
    details:{
      descreption:"SkyCast is a Flutter-based weather app that provides real-time weather information for any city you search for. It uses an external weather API and Cubit for state management, ensuring smooth and reactive performance. The app features dynamic theming, with colors and UI elements adapting to the current weather state (e.g., sunny, cloudy, or rainy), creating an engaging user experience. This project highlights my expertise in Flutter development, API integration, state management, and responsive UI design."
    }
  },
  {
    title: "BMP Filters Pack",
    breif: "A C++ project for processing grayscale .bmp images using nine custom filters, including Black & White, Invert, Merge, Rotate, and Blur.",
    image: "/imagefilters.png",
    tech: ["C++", "OOP", "Algorithms"],
    github: "https://github.com/mohamedwdm/BMP-Filters-pack.git",
    details: {
      descreption: "This C++ project is a BMP Filters Pack that processes grayscale .bmp images using nine different filters. The available filters include a Black & White Filter, Invert Colors Filter, and a Merge Filter that combines two images. It also features a Flip Filter (horizontally or vertically), Darken and Lighten Filter to adjust brightness, and a Rotate Filter for rotating images by 90°, 180°, or 270°. The Mirror Half Filter creates a mirrored effect on half of the image, while the Shuffle Filter rearranges image sections randomly. Finally, a Blur Filter adds a softening effect to reduce image details. This project demonstrates my skills in image processing, algorithm design, and C++ programming, with a focus on efficient manipulation of raw image data.",
    },
  },
  {
    title: "CPU Scheduling Simulator",
    breif: "A Java project that simulates SJF, Priority Scheduling, and SRTF algorithms, determines which processes run when there are multiple run-able processes.",
    image: "/cpu.jpg",
    tech: ["Java", "OOP", "Data Structures", "OS Fundamentals"],
    github: "https://github.com/mohamedwdm/CPU-Scheduler-Simulator.git",
    details: {
      descreption: "This Java project simulates three common CPU scheduling algorithms: Shortest Job First (SJF), Priority Scheduling, and Shortest Remaining Time First (SRTF). It allows users to input multiple processes with details like process name, arrival time, burst time, and priority. It determining which processes run when multiple processes are eligible. The project calculates and displays the waiting time and turnaround time for each process, along with average statistics for all processes. The simulator also includes features like context switching, aging for priority adjustment, and handling process starvation. This project highlights my skills in Java, algorithm design and fundamentals of operating systems.",
    },
  },
];