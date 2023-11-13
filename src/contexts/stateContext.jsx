import { useState, useContext, createContext } from "react";
import useQuestions from "../hooks/useQuestions";

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const { categories, loading } = useQuestions();
  
  const [category, setCategory] = useState(null);
  const [section, setSection] = useState("home");
  const [question, setQuestion] = useState(null);
  

  const getRandomQuestion = (category) => {
    const { questions } = categories[category];
    const random = questions[Math.floor(Math.random() * questions.length)];
    console.log(random);
    setQuestion(random);
  };

  const clear = () => {
    setSection("home");
    setCategory(null);
    setQuestion(null);
  };

  const changeSection = (newCategory) => {
    if (newCategory === category?.code) return;

    if (!newCategory) return clear();

    setSection("question");
    setCategory(categories[newCategory]);
    getRandomQuestion(newCategory);
  };

  const value = {
    section,
    categories: Object.values(categories),
    question,
    getRandomQuestion,
    loading,
    changeSection,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useAppState = () => useContext(StateContext);
