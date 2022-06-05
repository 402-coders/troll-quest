import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

export const getUniqueName = () =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
    length: 3,
  });
