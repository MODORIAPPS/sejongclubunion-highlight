import { SubjectType } from '@/models/subject.type';
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface SubjectCount {
  name: SubjectType;
  count: number;
}

type FormContentContextType = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  result: SubjectCount[];
  countBySubject: (subject: SubjectType) => void;
}

const FormContentContext = createContext<FormContentContextType>({
  currentIndex: 1,
  setCurrentIndex: () => { },
  result: [],
  countBySubject: () => { },
});

export const useFormContentContext = () => useContext(FormContentContext);

const FormContentContextProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [state, setState] = useState<SubjectCount[]>([]);

  const countBySubject = (subject: SubjectType) => {
    const array = [...state];
    let found = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i].name === subject) {
        array[i].count++;
        found = true;
        break;
      }
    }

    if (!found) {
      array.push({ name: subject, count: 1 });
    }

    setState(array);
  };

  return (
    <FormContentContext.Provider value={{
      currentIndex,
      setCurrentIndex,
      result: state,
      countBySubject
    }}>
      {children}
    </FormContentContext.Provider>
  );
};

export default FormContentContextProvider;
