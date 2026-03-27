import { useState } from '#app';

export type Fact = { id: number; description: string; };
export type Fruit = { id: number; img: string; name: string; color: string; facts: Fact[]; };

export const useFruits = () => {
  const customFruits = useState<Fruit[]>('customFruits', () => []);

  const getDemoFruits = (): Fruit[] => {
    const demo = [
      {
        id: 1,
        name: 'Dragon Fruit',
        color: '#ec4899', // pink-500
        img: 'https://images.unsplash.com/photo-1698546690393-45482eb06942?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        facts: [
          { id: 1, description: 'Also known as pitaya' },
          { id: 2, description: 'Rich in antioxidants' }
        ]
      },
      {
        id: 2,
        name: 'Mango',
        color: '#eab308', // yellow-500
        img: 'https://images.unsplash.com/photo-1673010960635-d0d1ad81b90a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        facts: [
          { id: 3, description: 'The king of fruits' },
          { id: 4, description: 'High in Vitamin C' }
        ]
      },
      {
        id: 3,
        name: 'Kiwi',
        color: '#84cc16', // lime-500
        img: 'https://images.unsplash.com/photo-1552801386-22419317d4d3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        facts: [
          { id: 5, description: 'Originates from China' },
          { id: 6, description: 'Can be eaten with the skin' }
        ]
      },
      {
        id: 4,
        name: 'Pomegranate',
        color: '#ef4444', // red-500
        img: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=800&q=80',
        facts: [
          { id: 7, description: 'Contains hundreds of seeds' },
          { id: 8, description: 'Symbol of prosperity' }
        ]
      },
      {
        id: 5,
        name: 'Papaya',
        color: '#f97316', // orange-500
        img: 'https://images.unsplash.com/photo-1581375383680-7101dc5cb5f4?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        facts: [
          { id: 9, description: 'Rich in digestive enzymes' },
          { id: 10, description: 'Christopher Columbus called it "fruit of the angels"' }
        ]
      },
      {
        id: 6,
        name: 'Blueberry',
        color: '#3b82f6', // blue-500
        img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&q=80',
        facts: [
          { id: 11, description: 'Ranked as a top superfood' },
          { id: 12, description: 'Native to North America' }
        ]
      }
    ];
    return [...demo, ...customFruits.value];
  };

  const getFruitById = (id: number): Fruit | undefined => {
    return getDemoFruits().find(f => f.id === id);
  };

  const addNewFruit = (fruit: Omit<Fruit, 'id'>) => {
    const all = getDemoFruits();
    const nextId = all.length > 0 ? Math.max(...all.map(f => f.id)) + 1 : 1;
    customFruits.value.push({ ...fruit, id: nextId });
  };

  return {
    getDemoFruits,
    getFruitById,
    addNewFruit
  };
};
