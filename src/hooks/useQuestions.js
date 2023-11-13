import { useState, useEffect } from "react";
import rawQuestions from "../assets";
import rawCategories from "../assets/categories";

const useQuestions = () => {
  const [categories, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categories = rawQuestions.reduce((res, question) => {
      question.categories.forEach((category) => {
        if (!res[category]) {
          const cat = rawCategories.find((cat) => cat.code === category);
          res[category] = { ...cat, questions: [] };
        }
        res[category].questions.push(question);
      });
      return res;
    }, {});

    setQuestions(categories);
    setLoading(false);
  }, []);

  return { categories, loading };
};

export default useQuestions;
