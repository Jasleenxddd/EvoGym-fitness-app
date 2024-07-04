import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our certified trainers provide expert instruction to ensure you use proper form and techniques, reducing the risk of injury and maximizing results. Enjoy the benefits of small class sizes, allowing for personalized coaching and adjustments tailored to your fitness level and goals.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
    "We offer a wide range of yoga styles to suit different preferences and goals, whether you seek relaxation, strength-building, or a deeper mind-body connection. Practice in our tranquil and well-equipped studios, designed to create a peaceful and focused environment.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Each class focuses on the muscles of your abdomen, obliques, and lower back, delivering a comprehensive core workout. A strong core improves posture, enhances athletic performance, and reduces the risk of injuries in daily activities.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      " Engage in activities that challenge your body in new and exciting ways, from obstacle courses to high-intensity circuit training. These classes offer a comprehensive workout that targets strength, endurance, agility, and coordination.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
    "With hundreds of diverse classes available, you’ll never get bored. Whether you’re into high-intensity workouts, mindful yoga sessions, or fun dance routines, we have something for everyone.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Our professional trainers bring years of experience and specialized knowledge to each class, ensuring you get the most out of every session. From high-intensity intervals to strength building and flexibility, our training classes cater to all fitness levels and preferences.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            At FitLife Gym, we believe that variety is key to staying motivated and achieving your fitness goals. That’s why we offer a wide range of classes designed to cater to every interest, fitness level, and schedule. Whether you’re looking to build strength, increase flexibility, or simply have fun, we have the perfect class for you.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;