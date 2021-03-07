import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([12, 5, 2, 7, -1, 4]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('xAsdccsdfEE');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(-599);
linkedList.add(1445);
linkedList.add(4);
linkedList.add(67);
linkedList.sort();
linkedList.print();
