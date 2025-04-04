import { CardStatus } from '../../cards/cardstatus.js'
import { CardOrganizer } from '../cardorganizer.js'

function newRecentMistakesFirstSorter (): CardOrganizer {
  return {
    reorganize: function (cards: CardStatus[]): CardStatus[] {
      return [...cards].sort((a, b) => {
        const resultsA = a.getResults(); //card buriin umnuh hariultuudiig awna
        const resultsB = b.getResults();
        //Suuliin aldaaniih ni index-iig oloh
        const lastIncorrectIndexA = resultsA
            .map((res, i) => ({ res, i }))  //ur dung  res: true, i=0; res: false, i=1
            .filter(r => r.res === false)   //Zuwhun false uldeene buyu shuune
            .map(r => r.i)                  //buruu hariulruudiin index
            .pop() ?? -1;                   //hamgiin suulchiin index-g awna. Herwee aldaa yruusu gargaagui bol -1
        const lastIncorrectIndexB = resultsB
            .map((res, i) => ({ res, i }))
            .filter(r => r.res === false)
            .map(r => r.i)
            .pop() ?? -1;

        //haritsuulalt sort() function ii logic 
        return lastIncorrectIndexB - lastIncorrectIndexA;
      });
    }
  }
};

export { newRecentMistakesFirstSorter };
