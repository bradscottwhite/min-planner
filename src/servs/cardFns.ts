/**
 * Service functions to interact with cards in db
 */

import { Dispatch, SetStateAction } from 'react';

import { API } from 'aws-amplify';
import { listCards } from '../graphql/queries';
import { ListCardsQuery, Cards as CardType } from '../API';

/**
 * Fetches data from aws api and puts it into the `cards` state
 */
export const getCards = async (setCards: Dispatch<SetStateAction<string[]>>) => {
  try {
    const cardData = (await API.graphql({
      query: listCards
    })) as {
      data: ListCardsQuery
    };
    const cards = (cardData.data.listCards?.items as CardType[])
      .sort((a, b) => a.order - b.order);
    setCards(
      cards.map(card => card.name)
    );
  } catch (err) {
    console.log('error fetching cards: ', err);
  }
};
