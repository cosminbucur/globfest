import { motion } from "framer-motion";

export const nameGroups = [
  // families
  ["Maria & Cătălin Cârligeanu"],
  ["Elisabeta & Bogdan Constantinescu"],
  ["Mihaela & Marius Paraschiv"],
  ["Iulia & Mihai Chiritescu"], 
  ["Oana & Robert Costache"],
  ["Flori & Răzvan Ganea"],
  ["Dana Simion", "Ovidiu Drumia"],
  ["Georgiana Dumitrescu, Robert Dumitrescu"],
  ["Andreea & Alex Vasile"],
  ["Andreea Peticaru", "Florin Andronache", "Alissa Andronache"],
  ["Mara Mihai, Mihaela Mihai"],
  ["Cristina Despescu & Alex ??"],
  ["Nikolina & Radu Sora"],

  // couples
  ["Ana Vasile", "Alex Georgescu"],
  ["Ionela Șchiopu", "Alex Amugea"],
  ["Diana Barbu", "Marian Petre"],

  // groups
  ["Cornelia Andrei & gașca ei", "Elena Diaconu", "Lucian Anton", "Tiberius Chenciu"],
  ["Alina Grigore & gașca ei"],
  ["Alex Gabriel & gașca lui"],
  ["Laura Bazdragan & gașca ei"],

  // singles
  ["Nicoleta Sima", "Iulia Marin", "Laura Carpaciu", "Roxana Stan", "Elena Stirlciuc"],
  ["Angel Totir", "Valentin Marin", "Cristi Marin"],

  // levelup
  ["Andrei Singureanu", "Andrei Iancu", "Cristi Godri", "Cosmin Barbu", "Antonio Petre", "Florin Ion", "Cristi Cernat", "Mihai Cristescu"],

  ["Andrei Stoica", "Viorel Cioroi", "Mihai Peștrită"], 
  ["Iuliana Toma", "Adina Caloianu","Delia Breștian", "Mirela Ianoși"],
  ["Ruxandra Lie", "Juliana Chetrone", "Andreea Tăbaraș", "Raluca Popescu"], 
  ["Lidia Marin", "Cristina Marchidan", "Roxana Chiosu", "Iulia Nedelcu", "Daniela Aliman"],

  // sing
  ["Sorina Mihalache", "Vladimir Chetroiu"],

  // friends
  ["Dana Mirza", "Radu Culda"],

  // cosmin
  ["David Mihăiță", "Bogdan Păun", "Arina Ene", "Beatrice Chivu", "Adriana Sinorchian", "Cristi Popovici"],

  // foreigners
  ["Santosh Kumar", "Vinit Anchan"],
];

export default function Acknowledgements({ t }: { t: any }) {
  return (
    <div className="mt-24 mb-12">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-christmas-red mb-12 text-center uppercase tracking-widest"
      >
        {t.about.acknowledgementsTitle}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {nameGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: groupIndex * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center justify-center space-y-2 group"
          >
            {group.map((name, nameIndex) => (
              <motion.span 
                key={nameIndex}
                whileHover={{ scale: 1.05, color: "#D42426" }}
                className="text-gray-700 font-medium text-lg text-center transition-colors cursor-default"
              >
                {name}
              </motion.span>
            ))}
            <div className="w-8 h-0.5 bg-christmas-red/20 group-hover:bg-christmas-red/50 transition-colors mt-2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
