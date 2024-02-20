interface QuestionAnswer {
  id: number;
  question: string;
  answer: string;
}

export const data: QuestionAnswer[] = [
  {
    id: 1,
    question: "What is the capital of France, and what historical event took place there in 1789?",
    answer: "Paris. The French Revolution, a pivotal moment in Western history, began in 1789 and led to the overthrow of the monarchy and the establishment of a republic."
  },
  {
    id: 2,
    question: "Explain the difference between mass and weight, and provide an example.",
    answer: "Mass is the amount of matter in an object, while weight is the force exerted on that object due to gravity. An object's mass remains constant regardless of location, but its weight can change depending on the gravitational pull."
  },
  {
    id: 3,
    question: "What is the significance of the Fibonacci sequence in nature and mathematics?",
    answer: "The Fibonacci sequence, where each number is the sum of the two preceding ones, appears surprisingly often in nature, from the arrangement of spirals in sunflowers to the branching patterns of trees. It also has numerous mathematical applications, including in probability theory and computer algorithms."
  },
  {
    id: 4,
    question: "Compare and contrast the literary styles of Shakespeare and Jane Austen, using specific examples.",
    answer: "Both Shakespeare and Austen are considered masters of English literature, but their styles differ significantly. Shakespeare uses rich imagery, complex metaphors, and dramatic language, while Austen employs wit, irony, and subtle social commentary. Shakespeare's characters are often larger-than-life, while Austen's are more realistic and relatable."
  },
  {
    id: 5,
    question: "What are the ethical considerations surrounding artificial intelligence, and how can we ensure its responsible development?",
    answer: "AI presents various ethical concerns, including bias, fairness, privacy, and potential misuse. Responsible development requires addressing these issues through principles like transparency, accountability, and human oversight."
  },
  // Add more complex questions and answers here...
];
