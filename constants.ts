
import { Question, QuestionType } from './types';

export const QUIZ_TITLE = "The Serpent's Wisdom: An Analysis of D.H. Lawrence's 'Snake'";

export const QUESTIONS: Question[] = [
  {
    type: QuestionType.MultipleChoice,
    question: "What is the main theme of the poem 'Snake'?",
    options: [
      "The beauty of industrialization",
      "The conflict between human education and natural instincts",
      "The importance of following societal rules",
      "A humorous take on a garden encounter",
    ],
    correctAnswer: "The conflict between human education and natural instincts",
  },
  {
    type: QuestionType.MultipleChoice,
    question: "In the poem, what does the snake symbolize?",
    options: [
      "Pure evil and temptation",
      "A pest to be exterminated",
      "A majestic, god-like creature of the natural world",
      "The poet's fear of the unknown",
    ],
    correctAnswer: "A majestic, god-like creature of the natural world",
  },
  {
    type: QuestionType.MultipleChoice,
    question: "The line 'And looked around like a god, unseeing, into the air' is an example of which literary device?",
    options: ["Metaphor", "Personification", "Simile", "Alliteration"],
    correctAnswer: "Simile",
  },
  {
    type: QuestionType.MultipleChoice,
    question: "Why does the poet throw a log at the snake?",
    options: [
      "He was trying to kill it for sport.",
      "He was angry that it drank his water.",
      "He was acting on the 'voices of his accursed human education.'",
      "He wanted to see how the snake would react.",
    ],
    correctAnswer: "He was acting on the 'voices of his accursed human education.'",
  },
  {
    type: QuestionType.MultipleChoice,
    question: "The setting of the poem is in Sicily, near which volcano?",
    options: ["Mount Vesuvius", "Mount Fuji", "Mount Etna", "Mount St. Helens"],
    correctAnswer: "Mount Etna",
  },
  {
    type: QuestionType.MultipleChoice,
    question: "How does the poet feel after throwing the log at the snake?",
    options: [
      "Proud and triumphant",
      "Indifferent and cold",
      "Relieved that the danger is gone",
      "Full of regret and pettiness",
    ],
    correctAnswer: "Full of regret and pettiness",
  },
  {
    type: QuestionType.MultipleChoice,
    question: "The poet's reference to the albatross is an allusion to which famous poem?",
    options: [
      "\"The Raven\" by Edgar Allan Poe",
      "\"Ode to a Nightingale\" by John Keats",
      "\"The Rime of the Ancient Mariner\" by Samuel Taylor Coleridge",
      "\"The Waste Land\" by T.S. Eliot",
    ],
    correctAnswer: "\"The Rime of the Ancient Mariner\" by Samuel Taylor Coleridge",
  },
  {
    type: QuestionType.MultipleChoice,
    question: "The poem is written in which form?",
    options: ["Sonnet", "Haiku", "Free Verse", "Limerick"],
    correctAnswer: "Free Verse",
  },
  {
    type: QuestionType.MultipleChoice,
    question: "What does the 'voice of my education' tell the poet about the snake?",
    options: [
      "That it is a beautiful creature to be admired.",
      "That it is a sign of good luck.",
      "That black snakes are innocent, but golden ones are venomous.",
      "That all snakes should be respected.",
    ],
    correctAnswer: "That black snakes are innocent, but golden ones are venomous.",
  },
  {
    type: QuestionType.Matching,
    question: "Match the literary device to the correct example from the poem.",
    items: [
      "Alliteration",
      "Personification",
      "Metaphor",
      "Onomatopoeia",
    ],
    matches: [
      "A sort of horror, a sort of protest against his withdrawing into that horrid black hole...",
      "He lifted his head from his drinking, as cattle do...",
      "The voice of my education said to me...",
      "And flickered his two-forked tongue from his lips, and mused a moment...",
    ],
    correctPairs: {
      "Alliteration": "A sort of horror, a sort of protest against his withdrawing into that horrid black hole...",
      "Personification": "The voice of my education said to me...",
      "Metaphor": "He lifted his head from his drinking, as cattle do...",
      "Onomatopoeia": "And flickered his two-forked tongue from his lips, and mused a moment...",
    },
  },
];
