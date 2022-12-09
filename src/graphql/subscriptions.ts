/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCards = /* GraphQL */ `
  subscription OnCreateCards($filter: ModelSubscriptionCardsFilterInput) {
    onCreateCards(filter: $filter) {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCards = /* GraphQL */ `
  subscription OnUpdateCards($filter: ModelSubscriptionCardsFilterInput) {
    onUpdateCards(filter: $filter) {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCards = /* GraphQL */ `
  subscription OnDeleteCards($filter: ModelSubscriptionCardsFilterInput) {
    onDeleteCards(filter: $filter) {
      id
      name
      order
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onCreateTask(filter: $filter, owner: $owner) {
      id
      text
      complete
      card
      priority
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onUpdateTask(filter: $filter, owner: $owner) {
      id
      text
      complete
      card
      priority
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask(
    $filter: ModelSubscriptionTaskFilterInput
    $owner: String
  ) {
    onDeleteTask(filter: $filter, owner: $owner) {
      id
      text
      complete
      card
      priority
      createdAt
      updatedAt
      owner
    }
  }
`;
