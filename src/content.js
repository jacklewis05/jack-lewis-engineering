import {
  Egg,
  Gift,
  Car,
  Clock,
  Gamepad2,
  Droplets,
  Sprout,
  HardHat,
  Cog,
  MountainSnow,
  Bike,
  Waves,
  Sailboat,
} from "lucide-react";

/* ============================================================================
   YOUR CONTENT — this is the only file you need to edit.

   Everything on the site comes from this file: your intro, experience,
   projects, skills, and contact info. Change the text between the quote marks
   and save. Keep the quote marks, commas, and brackets where they are.

   Quick guide:
   - New job/role?       Copy one block in EXPERIENCE and edit it.
   - New project?        Copy one block in COMPLETED_PROJECTS (or
                         ONGOING_PROJECTS) and edit it. Put its photos in a
                         new folder in public/images/.
   - Finished a project? Cut its block from ONGOING_PROJECTS and paste it into
                         COMPLETED_PROJECTS.

   ICONS: each project has a small icon. You can use any icon from
   https://lucide.dev/icons — add its name to the `import` list at the very
   top of this file, then use it as `icon: TheIconName`.
============================================================================ */

export const PROFILE = {
  name: "Jack Lewis",
  title: "Mechanical Design, Mechatronics, and Biomechanics",
  status: "BUILDING // UVA MECH-E + EE MINOR, '28",
  location: "Charlottesville, VA",
  headshot: "/images/site/headshot.jpg",
  bio: "I'm a mechanical engineering student at the University of Virginia, minoring in electrical engineering. I love turning ideas into physical things, from impact test rigs and race car chassis parts to small mechatronic gadgets. When I'm not in class or in the shop, you'll find me skiing, training for triathlons, or surfing.",
  email: "jack@arachnerd.com",
  linkedin: "https://www.linkedin.com/in/johnlewis05",
  github: "https://github.com/jacklewis05",
  resume: "/resume/John_Lewis_Resume.pdf",
  contactHeadline:
    "Working on something in mechanical design or mechatronics? Let's talk.",
};

/* ----------------------------------------------------------------------------
   EXPERIENCE — the vertical timeline. Most recent first.
   `summary` is always visible; `details` show when someone clicks
   "View details".
---------------------------------------------------------------------------- */
export const EXPERIENCE = [
  {
    id: "cab",
    org: "Center for Applied Biomechanics, UVA",
    role: "Undergraduate Researcher",
    dates: "May 2026 — Present",
    tag: "Research / Impact Biomechanics",
    summary:
      "Designing and running motorcycle helmet impact tests to study head and shoulder kinematics during crashes.",
    details: [
      "Designed multiple motorcycle helmet impact test rigs in SolidWorks, including an inverted pendulum simulating rider rotation at speeds up to 12.2 m/s and two drop-tower systems to compare international helmet standards.",
      "Produced machine-shop drawings and performed FEA to validate components under impact loading.",
      "Designed and 3D printed a shoulder surrogate integrated with a Hybrid III 50th-percentile male head form to investigate shoulder effects on helmeted head kinematics.",
      "Conducted instrumented helmet testing using VICON motion capture, Hybrid III sensors, load cells, and DAS, measuring linear and rotational acceleration and velocity during impact.",
      "Processed and visualized experimental data in MATLAB, compared head-response metrics across test configurations, and presented findings to faculty.",
    ],
    stack: ["SolidWorks", "FEA", "MATLAB", "VICON", "Hybrid III", "3D Printing"],
  },
  {
    id: "gizmologists",
    org: "Gizmologists, UVA",
    role: "Mechanical Lead",
    dates: "Aug 2024 — Present",
    tag: "Mechatronics / Leadership",
    summary:
      "Leading mechanical design for a 15-member team building small mechatronic projects.",
    details: [
      "Lead mechanical design and CAD organization for a 15-member multidisciplinary team focused on small mechatronic projects.",
      "Designed and built a clock with a gantry, stepper motors, and a servo-driven stylus that writes the time on pressure-sensitive boards, using an Arduino and C/C++.",
      "Train new members in SolidWorks, prototyping, and mechanical design practices to increase participation in club projects.",
    ],
    stack: ["SolidWorks", "Arduino", "C/C++", "Stepper Motors", "Prototyping"],
  },
  {
    id: "motorsports",
    org: "Virginia Motorsports",
    role: "Chassis Team Member",
    dates: "Aug 2024 — Present",
    tag: "Mechanical / Manufacturing",
    summary:
      "Designing, analyzing, and manufacturing chassis components for UVA's Formula SAE car.",
    details: [
      "Modeled chassis components in Fusion 360 according to Formula SAE packaging, structural, and competition requirements.",
      "Performed FEA to evaluate chassis stress, deformation, and factors of safety under defined loading conditions.",
      "Manufactured chassis components using CNC mills, waterjet cutting, and TIG welding.",
    ],
    stack: ["Fusion 360", "FEA", "CNC Milling", "Waterjet", "TIG Welding"],
  },
];

/* ----------------------------------------------------------------------------
   PROJECTS

   Each project has:
     id          short name used in the link, dashes instead of spaces
     icon        small icon on the card (see ICONS note at the top)
     title       project name
     org         where/with whom (club, class, "Personal Project", ...)
     period      when; leave as "" if you don't want a date shown
     category    small label in the card's top-right corner
     description 2-3 sentence summary on the card and at the top of the page
     stack       tools/skills shown as little tags
     content     the full write-up page, top to bottom. Each line is one of:
                   "A paragraph of text.",
                   { heading: "A section title" },
                   { image: "/images/folder/photo.jpg", caption: "optional" },
                   { video: "/images/folder/clip.mp4", caption: "optional" },
                   { images: [ { src: "...", caption: "..." }, ... ] },  <- photos side by side
                   { list: [ "point one", "point two" ] },
                 Leave content as [] and the page shows "Updates coming soon."
---------------------------------------------------------------------------- */

export const ONGOING_PROJECTS = [
  {
    id: "robotic-arm",
    icon: Cog,
    title: "Robotic Arm with Cycloidal Drives",
    org: "Personal Project",
    period: "",
    category: "Robotics",
    description:
      "A compact robotic arm driven by stepper motors, with a cycloidal gearbox I designed and 3D printed in each joint. Right now I'm working on the drive design to reduce friction between the discs and the ring housing.",
    stack: ["SolidWorks", "Cycloidal Drives", "3D Printing", "Stepper Motors", "MT6701 Encoders"],
    content: [
      // ---- Progress log: add new updates at the bottom as the project moves along ----
      "I'm building a small stepper-motor-driven robotic arm, and instead of buying gearboxes for the joints I'm designing my own cycloidal drives from scratch. My main goal is to keep the arm as sleek and compact as possible. That goal drives most of my decisions, from the gearbox layout to where the sensors go.",
      { heading: "Why a cycloidal drive" },
      "Cycloidal drives get a big gear reduction out of a thin, flat package, which suits a slim arm joint. I also wanted a gearbox that is cheap and simple to make, so each one can be printed and assembled without special parts.",
      { heading: "The design" },
      "I designed the drive in SolidWorks. It has two cycloidal discs, a printed ring housing, and output pins. I printed the ring teeth directly into the housing instead of using separate steel pins. That keeps assembly simple and keeps each gearbox cheap to produce.",
      { image: "/images/robotic-arm/drive-front.png", caption: "Cycloidal discs inside the printed ring housing" },
      { list: [
        "Generating circle radius (R): 35 mm",
        "Eccentricity (E): 0.8 mm, raised from 0.65 mm in an earlier version",
        "Ring pin radius (Rr): 2.5 mm",
        "Number of ring pins (N): 30, which gives a 29:1 reduction",
      ] },
      "The output stage uses a 50 × 65 × 7 mm bearing that sits inside the ring housing.",
      { image: "/images/robotic-arm/disc-stack.png", caption: "Two-disc stack with the output pins" },
      { heading: "First print" },
      { image: "/images/robotic-arm/discs-slicer.jpg", caption: "Two cycloidal discs in the slicer, about 2 h 20 min to print" },
      "The first print had a lot of friction between the discs and the ring housing. I added clearance around the output pins, which helped but didn't fix it. I also suspect the output bearing is pressing against the cycloidal discs and adding to the friction.",
      { heading: "Next iteration" },
      "Before I print another full version, I plan to shrink the generating circle radius from 35 mm to 32.5 mm and lower the reduction to around 20:1 or 25:1. That should give the discs more room to move without binding. Then I'll print it and test again.",
      { heading: "Sensing and control" },
      "Each joint will be driven by a stepper motor through one of these gearboxes. For position feedback, I'm putting MT6701 magnetic encoders directly on the motor shafts. I considered a second encoder on the output side of each gearbox, but centering it and fitting it inside the joint would have made the joint bulkier, which works against keeping the arm slim. For homing at startup, I'm planning to use a hall sensor.",
    ],
  },
  {
    id: "helmet-impact-rigs",
    icon: HardHat,
    title: "Motorcycle Helmet Impact Test Rigs",
    org: "Center for Applied Biomechanics · UVA",
    period: "May 2026 — Present",
    category: "Research",
    description:
      "Designing an inverted-pendulum rig that simulates rider rotation at up to 12.2 m/s, two drop towers for comparing international helmet standards, and a 3D-printed shoulder surrogate for a Hybrid III head form.",
    stack: ["SolidWorks", "FEA", "MATLAB", "VICON"],
    content: [],
  },
];

export const COMPLETED_PROJECTS = [
  {
    id: "egg-thief",
    icon: Egg,
    title: "Catching an Egg Thief",
    org: "Personal Project",
    period: "May 2026",
    category: "Embedded",
    description:
      "An ESP32 surveillance system that uses a thin-film force sensor to detect when my egg carton is lifted, then triggers an ESP32-CAM over ESP-NOW and sends the photo to a Flask server over Wi-Fi.",
    stack: ["ESP32", "ESP-NOW", "Flask", "C++", "Python", "Fusion 360"],
    content: [
        "One of my roommates continues to steal my eggs, and instead of confronting them I created a device to catch them in the act.",
        { image: "/images/egg-thief/culprit.jpg", caption: "The Culprit" },
        "This device uses a force sensor to detect when the eggs are lifted. The sensor is connected to an ESP32 housed inside a control box. When the ESP32 detects a change in force, it sends a signal to an ESP32-CAM positioned elsewhere in the room, prompting it to take a photograph. The image is then transmitted over Wi-Fi to a Flask server running on my computer, where it is displayed.",
        { heading: "Background" },
        "While living at college, one of my 9 roommates continued to take my eggs. For weeks I would look in my pack of eggs to discover a couple had gone missing. Despite texting everyone to stop taking my eggs they kept disappearing, and since I'm an engineer there is only one thing for me to do — build a device to catch them red-handed.",
        { heading: "Constraints" },
        "When designing the device, I had several important constraints to consider. First, no wireless signal could reliably escape from inside the refrigerator, so the sensor detecting the carton's removal needed to be wired to a controller outside the fridge. Second, I wanted the camera responsible for documenting the egg heist to remain reasonably concealed — running visible wires across the room would have made the surveillance operation less discreet. Third, both devices needed to run on battery power for extended periods.",
        "Fortunately, I had recently become interested in building projects with the ESP32, which offers several capabilities beyond an Arduino Nano. One particularly useful feature is ESP-NOW, which lets ESP32 boards communicate directly and efficiently with one another. I also discovered the ESP32-CAM, an ESP32 board with an integrated camera — exactly what I needed to capture the culprit in the act.",
        { heading: "The Design" },
        "The design is relatively simple. A force sensor is mounted inside the refrigerator beneath the egg carton, with wires running outside the fridge to a control box designed in Fusion 360. The control box houses the ESP32 that monitors the sensor. When the carton is lifted, the ESP32 sends a signal to the camera, prompting it to take a photo and catch the egg thief in the act.",
        { heading: "The Force Sensor" },
        "I used a thin-film pressure sensor to detect the presence of the egg carton, rated for -40°C to 85°C and up to 6 kg — well beyond what's needed inside a fridge. I designed a simple mounting bracket to secure the sensor while keeping the wires clear of the carton.",
        { image: "/images/egg-thief/force-sensor-cad.png", caption: "Force sensor bracket" },
        { heading: "The Control Box" },
        "The control box needed an indicator to show when force was being detected, a reliable connection between the pressure sensor and the ESP32, a portable power source, and an enclosure to protect and organize all the components.",
        { image: "/images/egg-thief/breadboard.png", caption: "Prototyping on breadboard" },
        "When the force sensor detects a reading greater than 200, an LED turns on to indicate that the egg carton is in place. Once the force is removed, the ESP32 sends a command to the camera to take a photo. After confirming the whole system worked, I transferred the electronics onto a perfboard for a cleaner, more permanent assembly.",
        { image: "/images/egg-thief/perfboard.jpg", caption: "Final circuit on perfboard" },
        "The system is powered by a 9-volt battery, with a buck converter reducing the voltage to the 5 volts the ESP32 needs. I designed a compact enclosure to securely house the battery, converter, circuit board, and ESP32.",
        { image: "/images/egg-thief/case.png", caption: "Control box with everything in it" },
        { heading: "The Camera" },
        "After flashing the ESP32-CAM with the program, it simply waits to receive a signal through ESP-NOW before taking a photo. The only additional part I designed was a small enclosure that let the camera mount securely to the wall.",
        { image: "/images/egg-thief/camera.png", caption: "Camera with enclosure" },
        { heading: "Communication" },
        "ESP-NOW is a peer-to-peer wireless protocol developed by Espressif that lets ESP32/ESP8266 boards talk directly to each other without a Wi-Fi router, bypassing the traditional network stack for ultra-fast, low-latency, energy-efficient transfers.",
        "Flask was used to receive and store the images taken by the ESP32-CAM. After capturing a photo, the camera sent the image over Wi-Fi to a Flask server running on a computer, which saved it and made it available on a simple gallery webpage viewable from another device on the same network.",
        { heading: "Full Setup" },
        { image: "/images/egg-thief/full-setup.jpg", caption: "Full setup in the fridge (disregard the mess — 9 roommates)" },
        { heading: "Conclusion" },
        "And after a couple days... the culprit was found.",
        { image: "/images/egg-thief/culprit.jpg", caption: "The Culprit" },
        "Overall, I greatly enjoyed this project — it gave me the chance to take a small problem from everyday life and apply what I'd learned to build a practical solution. Through the process I gained experience with wireless communication networks, Python, Wi-Fi connectivity, mechanical design, and mechatronic system integration. If I were to improve it, I'd consider replacing the pressure sensor with a Hall effect sensor for more reliable detection.",
    ],
  },
  {
    id: "potential-energy-racer",
    icon: Car,
    title: "Potential Energy Propulsion Racer",
    org: "Team Lead · UVA",
    period: "Oct 2025 — Dec 2025",
    category: "Mechanical",
    description:
      "A 3D-printed, spring-powered obstacle-course vehicle that had to fit in a 12 × 8 × 4 in. box at launch. It used a 12:1 compound gearbox and deployable scoring arms, scored 1,200 points, placed 3rd overall, and won the Elegance award.",
    stack: ["SolidWorks", "Gear Trains", "Spring Mechanics", "3D Printing"],
    content: [
        "The purpose of this project was to create a 3D-printed vehicle that performs as well as possible on an obstacle course using three available energy sources: the height of a four-foot ramp, stored energy in three mechanical springs, and electrical energy in a 5V supercapacitor driving a small propeller. The entire vehicle had to be designed in SolidWorks and printed in ABS or PLA, fit inside a 12\" × 8\" × 4\" box at release, and include at least two gears that mesh and operate together on their own during motion.",
        "The main challenge was developing a lightweight, dependable system that could take these different forms of stored energy and turn them into smooth, controlled movement across the course — balancing weight and strength, transmitting spring energy effectively, timing the propeller activation, and keeping the vehicle stable as it accelerates down the ramp and through obstacles.",
        { heading: "Our Final Design" },
        { image: "/images/potential-energy-racer/final-design.png", caption: "Final design" },
        "Chassis: Our final car centers around the main chassis and tracks. Springs are secured near the front and held in place with a separate piece that press-fits into the car, then connected to a slider attached to the chassis that slides on tracks.",
        { image: "/images/potential-energy-racer/track.png", caption: "Track and slider" },
        { image: "/images/potential-energy-racer/gearbox.png", caption: "Gearbox design" },
        "Gearbox: The gearbox uses a 12:1 compound gear ratio to amplify torque from the spring system, allowing for more controlled acceleration and better handling of obstacles.",
        { image: "/images/potential-energy-racer/side-profile.png", caption: "Joints used to assemble the car" },
        "Integration: The car is printed in multiple pieces assembled using snap-fit joints, allowing easier printing and assembly and the ability to replace or modify individual components. The main drive axles are supported by press-fit ball bearings, letting the car drive smoothly and straight without needing custom-printed axles. Wheels are 3.75\" in diameter to leave room for the lifting arms while maximizing distance traveled per rotation.",
        { image: "/images/potential-energy-racer/lifting-arm.png", caption: "Lifting arms in motion" },
        "Lifting Arms: As a team, we decided to gain extra points by hitting optional spinners along the track. A lever arm is fixed to the front of the car, and another arm connects to the slider — lying flat at full spring extension, then rising as the car lifts up to hit the spinners, which sat 6 inches above the track while our car needed to fit under 4 inches in height.",
        { heading: "Testing" },
        "We used the ramp at the start of the track to overcome static friction and get the car moving, then placed a long jump immediately after as our main source of points — once completed, we'd already have net +200 points (500 minus 300 from the ramp), with spinner targets worth 200 points each and carpet sections worth 100 points each.",
        { video: "/images/potential-energy-racer/testing.mp4", caption: "Testing the car on the course" },
        "In this practice run, we effectively crossed the long jump and hit one of the spinners, though the car drifted left due to a wheel slipping from gearbox torque. This video was posted on our Dean of Engineering's Instagram, reaching 1.8 million views. After this run we added another small jump for extra points, which we accomplished. We also earned an extra 500 points from the Elegance award for best design, giving us 1200 points total and third place overall.",
        { heading: "Conclusion" },
        "Overall this project was a great experience in mechanical design and problem-solving, challenging us to think critically about combining different energy sources to achieve our goals. It enhanced our technical skills and fostered teamwork and creativity.",
        "With more time, we would have made the lifting arms more rigid (they tended to wobble hitting the spinners), improved wheel alignment to prevent drifting, experimented with different spring tensions to balance speed and control, and added the optional supercapacitor and propeller for a boost once the springs ran out.",
    ],
  },
  {
    id: "feather-pen-clock",
    icon: Clock,
    title: "Feather Pen Clock",
    org: "Gizmologists · UVA",
    period: "",
    category: "Mechatronics",
    description:
      "A clock that uses a gantry and a servo-mounted feather pen to write the time on LCD boards, erasing and redrawing a digit every minute. Runs on an Arduino Nano with two stepper drivers and limit-switch homing.",
    stack: ["Arduino", "Stepper Motors", "Servo Control", "CAD", "3D Printing"],
    content: [
        "A unique writing clock combining precise mechanics with whimsical design — a mechanical clock driven by a gantry and servo-mounted feather pen that writes the time on itself all day in the mechanical engineering building.",
        { heading: "Homing" },
        { video: "/images/feather-pen-clock/homing.mp4", caption: "Clock homing sequence" },
        "When turned on, the Arduino Nano initiates a calibration sequence that sets minimum and maximum x and y coordinates. The gantry moves until it hits its limit switch in y and each of two limit switches in x, which is used to create the planes in which numbers are drawn.",
        { heading: "Circuitry" },
        { image: "/images/feather-pen-clock/circuits.jpg", caption: "Clock circuitry" },
        "Two A4988 stepper motor drivers control the longitudinal and lateral stepper motors. An LM7805 5V regulator takes 12V from a power supply and outputs 5V for Arduino power and driver logic power, while the 12V powers the stepper motors' coils. Limit switches are wired with pull-down resistors, and the servo is controlled by a single Arduino pin.",
        { heading: "Number Changing" },
        { video: "/images/feather-pen-clock/number-change.mp4", caption: "Number changing sequence" },
        "During each change of minute, the clock erases one of the LCD boogie boards and writes in a new number.",
    ],
  },
  {
    id: "christmas-planter",
    icon: Gift,
    title: "Christmas Self Watering Planter",
    org: "Personal Project",
    period: "",
    category: "Design / Fabrication",
    description:
      "A second-generation self-watering planter with a 3D-printed base, cast plaster walls, and a printed top. It uses a reusable multi-direction mold and a drill-powered mixer, so I could make six as Christmas gifts.",
    stack: ["CAD", "3D Printing", "Mold Making", "Plaster Casting"],
    content: [
        "About a year after creating my first self-watering planter, I wanted to make several simple planters as Christmas gifts for my family. I used the opportunity to design a second version that improved on every aspect of the original while introducing a greater level of complexity.",
        { heading: "Design Overview" },
        "I set out to create a design that was simple, functional, and visually appealing enough to display in a living room. I settled on a three-part construction: a 3D-printed base, plaster walls, and a 3D-printed top that holds the plant.",
        { image: "/images/christmas-planter/render.png", caption: "Render of the final planter design" },
        { image: "/images/christmas-planter/explanation-1.png", caption: "Explanation of the planter design" },
        "Because the plaster featured a complex shape, designing the mold presented several challenges, especially since I wanted it to be reusable to reduce the cost of producing multiple planters.",
        "Another issue came from my experience making the original planter — mixing the concrete by hand with a popsicle stick was slow and produced inconsistent results, so I wanted a tool that would make mixing faster and more reliable.",
        { image: "/images/christmas-planter/mixer.png", caption: "Mixer design" },
        "I created this mixer to fit into a drill. Printed in ABS at full infill, it can take quite a beating.",
        "The second challenge involved releasing the plaster from the mold. Because of the planter's geometry, the mold needed to separate in multiple directions — the bottom section pulling downward, the top lifting upward, and the side walls releasing outward. I went through several design iterations before landing on a mold that was both easy to disassemble and durable enough to reuse.",
        { image: "/images/christmas-planter/mold-parts.jpg", caption: "Each part of the mold" },
        { image: "/images/christmas-planter/explanation-2.png", caption: "Explanation of mold design" },
        "Once the final design was reached, it was very simple to print the other pieces to complete the vase, and then repeat.",
        { image: "/images/christmas-planter/final.jpg", caption: "Final planter" },
        "In total, I made 6 to give to family and friends, changing the filament color and dyeing the plaster with different colors for variety.",
        { heading: "Conclusion" },
        "I enjoyed this project thoroughly — it let me fix issues I had with my last planter while improving my design and problem-solving skills. If I improved it further, I'd want to make the planter itself larger to fit bigger plants.",
    ],
  },
  {
    id: "button-game",
    icon: Gamepad2,
    title: "Button Game Platform",
    org: "Gizmologists · UVA",
    period: "",
    category: "Mechatronics",
    description:
      "A reaction-time game platform built from plywood, 2x4s, and a 3D-printed topper. An Arduino Uno runs whack-a-mole, reaction duel, and memory games, and the club uses it at outreach events.",
    stack: ["Arduino", "Circuits", "Fusion 360", "3D Printing", "Woodworking"],
    content: [
        "An interactive game platform built with wood and PLA to play a variety of games, programmed into an Arduino Uno. Designed to test player reaction time and advertise the Gizmologists to students on grounds during outreach events.",
        { image: "/images/button-game/platform.jpg", caption: "Button Game Platform" },
        { heading: "Design and Build" },
        "The platform was designed using Fusion 360 for the 3D-printed components and hand-drawn plans for the wooden frame. The frame was built from plywood and 2x4s, while the button casing and internal components were 3D printed in PLA. The design focused on durability and ease of assembly so the platform could withstand frequent use during outreach events.",
        { image: "/images/button-game/wood-joints.jpg", caption: "Button game wood joints" },
        { heading: "Frame Construction" },
        "The wooden frame was built from plywood and 2x4s, with joints carefully designed for structural integrity and ease of assembly, using a miter saw, jointer, and planer. The frame provides a stable base for the 3D-printed button casing, allowing for a secure, durable platform suitable for repeated use.",
        { image: "/images/button-game/printed-part.png", caption: "3D printed button casing" },
        { heading: "3D Printed Components" },
        "The 3D-printed topper overlays the wooden frame and includes sockets for the buttons and a mount for the OLED display. This topper was printed in three sections and fitted together on top of a plywood layer.",
        { image: "/images/button-game/circuitry.jpg", caption: "Button game circuitry" },
        { heading: "Circuitry" },
        "2N3904 NPN transistors sink sufficient power through the LEDs built into the buttons, and a variety of games are programmed into the Arduino, including whack-a-mole, reaction duel, and a memory game.",
        { image: "/images/button-game/perfboard.jpg", caption: "Perfboard layout" },
        { heading: "Perfboard" },
        "I designed and soldered a perfboard to neatly organize components and connect the buttons, OLED display, and Arduino Uno — a clean, reliable wiring setup that minimizes issues during operation and makes future modifications or repairs easier.",
    ],
  },
  {
    id: "clean-my-water",
    icon: Droplets,
    title: "Clean My Water",
    org: "Team Project · UVA",
    period: "",
    category: "Materials / Design",
    description:
      "A portable, gravity-fed water filter for hikers made from pine xylem, pumice, and charcoal. In testing it cut turbidity by 81.9% and E. coli by 97.4%.",
    stack: ["Materials Science", "Filtration Design", "Testing", "3D Printing"],
    content: [
        "A portable, natural-material-based water filtration system for outdoor enthusiasts. The Clean My Water project addresses the need for low-cost, sustainable filtration for hikers and campers. Tasked with creating a filter capable of producing safe drinking water from natural sources, our team developed, tested, and iterated on a gravity-fed design using pine wood, pumice, and charcoal.",
        "Our methodology began with client interviews and a literature review to define design constraints emphasizing pathogen removal, portability, affordability, and natural materials. Several concepts were proposed, including reed-based and sediment-based designs, but analysis of performance and practicality led us to a pine-xylem-based osmosis design, supplemented by pumice and charcoal layers to enhance filtration and reduce clogging.",
        "Testing evaluated turbidity, E. coli presence, flow rate, durability, and usability. Results showed an 81.9% reduction in turbidity and a 97.4% reduction in E. coli, meeting EPA drinking water standards. User feedback rated usability at 90%. Early flow rate was slower than desired, prompting revisions to sealing and pressure application.",
        "In conclusion, our final prototype fulfilled most of the project objectives, providing a low-cost, effective, sustainable personal water filtration device, with future work needed on flow rate and filter lifespan, plus research into applications for communities without access to municipal water treatment.",
        { heading: "Initial Design Considerations" },
        "The initial design phase involved brainstorming filtration methods and materials, weighing natural availability, ease of assembly, and effectiveness at removing contaminants. The chosen design layers pine wood for natural filtration, pumice for mechanical filtration, and charcoal for chemical adsorption.",
        { images: [
          { src: "/images/clean-my-water/idea-1.png", caption: "Pine xylem filter design" },
          { src: "/images/clean-my-water/idea-2.png", caption: "Reed-based filter" },
          { src: "/images/clean-my-water/idea-3.png", caption: "Sediment-based filter" },
        ] },
        "We chose to develop the pine-based osmosis filter, as it proved most reliable compared to the alternatives — the reed-based design risked water bypassing the membrane, and research on sediment-based filtration indicated it wouldn't meet our purification criteria. These concerns were reinforced by our peer reviewers.",
        { image: "/images/clean-my-water/decision-matrix.png", caption: "Decision matrix" },
        { heading: "Final Design and Testing" },
        { image: "/images/clean-my-water/detailed-design.png", caption: "Final filter design" },
        "This filtration system combines charcoal, crushed pumice, and a cross-cut piece of pine sapwood to remove sediment and bacteria from water. The charcoal layer eliminates unpleasant tastes and certain chemicals, the pumice traps organic matter like algae and prevents oils from passing through, and the pine component — a freshly cut wood disk — lets water flow through xylem cell membranes, removing most bacteria and pathogens. Layers of natural sponge separate the filtration materials for efficiency.",
        "The system is housed in a PVC pipe, with a flexible adapter securing the pine wood at the end of the filter for easy replacement. 3D-printed adapters connect the filter to a five-foot vinyl tube attached to a two-liter bag or soda bottle, providing about 2 psi of pressure. Each pine filter lasts about a week if kept wet, with the pine disk being the only part that needs replacing.",
        { heading: "E. coli Testing" },
        { image: "/images/clean-my-water/before-after.png", caption: "Filter papers before and after filtering" },
        "Initial testing yielded promising results: turbidity levels decreased by an average of 81.9% between unfiltered and purified samples, with the filtered water's absorbance only 0.0043 above tap water. Without a direct absorbance-to-turbidity conversion, confirming exact EPA compliance remains uncertain.",
        { image: "/images/clean-my-water/turbidity-test.png", caption: "Turbidity test results" },
        "E. coli testing showed a significant reduction, with bacterial colonies decreasing by approximately 97.4%, from 48 colonies to about one.",
        { heading: "Recommendations and Future Work" },
        { list: [
          "Improve flow rate: the biggest shortcoming was slow filtration speed (~1 liter every 20 hours). Future iterations should optimize pine puck thickness, increase surface area, and explore mechanical aids like hand pumps or increased hydrostatic head.",
          "Improve longevity of pine filters: research ways to preserve or dry pine disks without damaging xylem cell walls, and test alternative wood or plant types with greater availability.",
          "Research alternative applications: the filter's simplicity and natural construction make it feasible for regions lacking municipal water treatment — MIT is currently conducting field work on this technology.",
          "Conduct long-term field testing: real-world trials are needed to evaluate performance over time across varying source water quality, temperature, and handling conditions, alongside further lab verification of E. coli results.",
        ] },
    ],
  },
  {
    id: "sad-planter",
    icon: Sprout,
    title: "Self Watering Planter to Combat SAD",
    org: "Engineering Foundations · UVA",
    period: "",
    category: "Design / Fabrication",
    description:
      "A self-watering, concrete-cast planter that holds two weeks of water, designed to help college students keep plants alive and ease the effects of Seasonal Affective Disorder.",
    stack: ["Fusion 360", "3D Printing", "Concrete Casting", "Material Selection"],
    content: [
        "A set of self-watering planters designed to provide consistent hydration for indoor plants. After seeing online videos of people using 3D prints as molds for concrete forms, I wanted to create my own planters that involve concrete to create a sense of quality.",
        "The main focus of this project was to create a planter that is both functional and visually appealing — accounting for drainage, plant health, and ease of use while maintaining a modern look built around 3D-printed forms.",
        { heading: "Design Overview" },
        "In my Engineering Foundations class, we were tasked with solving a problem many students face. Knowing that many students struggle to keep plants alive in their dorms, I designed a self-watering planter to help students keep their plants healthy, incorporating a concrete form into the design. A year later, using what I'd learned, I created a second planter with a reusable mold — the Christmas planter project — to make easy holiday gifts for my family.",
        { heading: "Design 1: A Self-Watering Planter to Combat SAD" },
        { heading: "Summary" },
        "We designed a device to boost student well-being and combat the effects of Seasonal Affective Disorder (SAD), which affects how students think, react, and handle daily challenges. Plants are known to benefit mental health and can help with attention span, energy levels, blood pressure, and spatial perception, so a self-watering planter can help mitigate the effects of SAD in college students.",
        { heading: "Problem Statement" },
        "SAD can change the way a person thinks, reacts, and deals with everyday challenges. About 5% of adults in the U.S. experience SAD, lasting roughly 40% of the year, and 25% of college students across the U.S. suffer from it — a rate that increases at higher latitudes or in cloudier regions. This adds stress to an already demanding academic and social environment, and often goes unnoticed while significantly impacting academic performance.",
        "Plants have documented benefits for humans: lower blood pressure, greater attentiveness, higher energy levels, and improved perception of a space. A study in Shanghai during COVID-19 found residents exposed to greenery experienced better mental health during lockdown — directly relevant to college students confined to a dorm room during winter months.",
        { heading: "Design Objectives" },
        { list: [
          "Accessible design that all people, especially students, can use for themselves.",
          "Relatively autonomous, remaining functional even when neglected for a period of time.",
          "Compact and portable, easy to set up.",
          "Aesthetically pleasing, something people will associate with and want to display.",
          "Modular, allowing multiple units to fit together.",
          "Sized for real plant growth while still fitting tighter spaces like dorm rooms or classrooms.",
          "Ensures efficient, healthy plant growth.",
        ] },
        { heading: "About the Design" },
        "We wanted something visually appealing with the capacity to hold enough water for at least two weeks, and landed on this design:",
        { image: "/images/sad-planter/concept.png", caption: "Planter concept" },
        { image: "/images/sad-planter/mould.png", caption: "3D-printed mold for the concrete" },
        { heading: "Conclusion" },
        "This is a favorite project of mine — I learned a lot of tools in Fusion 360 and generally improved my ability to design an idea from my head into reality. With more time, I would have liked to improve a few things.",
        { list: [
          "Removing the base from the mold was tricky without breaking it — I've since improved my mold-making skills (see the Christmas planter project), and would use flexible resin molds instead.",
          "I would have liked to add a lighting system for grow lights if the planter is placed somewhere without enough natural light.",
          "The concrete was visually appealing and sturdy, but curing took up to a week or more — a problem I solved in the Christmas planter project by switching to plaster molds.",
        ] },
        "Altogether this was a great project that helped me develop skills I use in classes at school and beyond.",
    ],
  },
];

/* ----------------------------------------------------------------------------
   SKILLS — each group becomes a column. Add, remove, or rename groups freely.
---------------------------------------------------------------------------- */
export const SKILLS = {
  Languages: ["MATLAB", "C++", "Python", "Java", "C#"],
  "Engineering Software": [
    "SolidWorks",
    "Fusion 360",
    "ANSYS Mechanical",
    "Autodesk CFD",
    "MS Office",
  ],
  "Hardware & Electronics": [
    "ESP32",
    "Arduino",
    "Stepper & Servo Motors",
    "Soldering / Perfboard",
    "VICON Motion Capture",
    "Load Cells & DAS",
  ],
  Fabrication: [
    "3D Printing",
    "CNC Milling",
    "Waterjet Cutting",
    "TIG Welding",
    "Woodworking",
    "Mold Making & Casting",
  ],
  "Engineering Concepts": [
    "FEA",
    "Impact Biomechanics",
    "Mechanism Design",
    "Gear Trains",
    "Wireless Comms (ESP-NOW)",
  ],
  Certifications: ["Certified SolidWorks Associate (CSWA)"],
};

/* ----------------------------------------------------------------------------
   BEYOND THE LAB — a few personal lines at the bottom of the skills section.
   Make these sound like you!
---------------------------------------------------------------------------- */
export const BEYOND_THE_LAB = [
  {
    icon: MountainSnow,
    label: "Member of the Virginia Alpine Ski and Snowboard Team.",
  },
  {
    icon: Bike,
    label: "Swimming, biking, and running with the UVA Triathlon Club.",
  },
  {
    icon: Waves,
    label: "Part of UVA Surfrider, helping protect oceans and beaches.",
  },
  {
    icon: Sailboat,
    label: "Spends summers on Shelter Island, NY.",
  },
];
