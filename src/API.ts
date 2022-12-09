/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCardsInput = {
  id?: string | null,
  name: string,
  order: number,
};

export type ModelCardsConditionInput = {
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelCardsConditionInput | null > | null,
  or?: Array< ModelCardsConditionInput | null > | null,
  not?: ModelCardsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Cards = {
  __typename: "Cards",
  id: string,
  name: string,
  order: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCardsInput = {
  id: string,
  name?: string | null,
  order?: number | null,
};

export type DeleteCardsInput = {
  id: string,
};

export type CreateTaskInput = {
  id?: string | null,
  text: string,
  complete: boolean,
  card: number,
  priority?: number | null,
};

export type ModelTaskConditionInput = {
  text?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  card?: ModelIntInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  text: string,
  complete: boolean,
  card: number,
  priority?: number | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTaskInput = {
  id: string,
  text?: string | null,
  complete?: boolean | null,
  card?: number | null,
  priority?: number | null,
};

export type DeleteTaskInput = {
  id: string,
};

export type ModelCardsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelCardsFilterInput | null > | null,
  or?: Array< ModelCardsFilterInput | null > | null,
  not?: ModelCardsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCardsConnection = {
  __typename: "ModelCardsConnection",
  items:  Array<Cards | null >,
  nextToken?: string | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  card?: ModelIntInput | null,
  priority?: ModelIntInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCardsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  order?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCardsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCardsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTaskFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  complete?: ModelSubscriptionBooleanInput | null,
  card?: ModelSubscriptionIntInput | null,
  priority?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateCardsMutationVariables = {
  input: CreateCardsInput,
  condition?: ModelCardsConditionInput | null,
};

export type CreateCardsMutation = {
  createCards?:  {
    __typename: "Cards",
    id: string,
    name: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCardsMutationVariables = {
  input: UpdateCardsInput,
  condition?: ModelCardsConditionInput | null,
};

export type UpdateCardsMutation = {
  updateCards?:  {
    __typename: "Cards",
    id: string,
    name: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCardsMutationVariables = {
  input: DeleteCardsInput,
  condition?: ModelCardsConditionInput | null,
};

export type DeleteCardsMutation = {
  deleteCards?:  {
    __typename: "Cards",
    id: string,
    name: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    text: string,
    complete: boolean,
    card: number,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    text: string,
    complete: boolean,
    card: number,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    text: string,
    complete: boolean,
    card: number,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetCardsQueryVariables = {
  id: string,
};

export type GetCardsQuery = {
  getCards?:  {
    __typename: "Cards",
    id: string,
    name: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardsConnection",
    items:  Array< {
      __typename: "Cards",
      id: string,
      name: string,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    text: string,
    complete: boolean,
    card: number,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      text: string,
      complete: boolean,
      card: number,
      priority?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCardsSubscriptionVariables = {
  filter?: ModelSubscriptionCardsFilterInput | null,
};

export type OnCreateCardsSubscription = {
  onCreateCards?:  {
    __typename: "Cards",
    id: string,
    name: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCardsSubscriptionVariables = {
  filter?: ModelSubscriptionCardsFilterInput | null,
};

export type OnUpdateCardsSubscription = {
  onUpdateCards?:  {
    __typename: "Cards",
    id: string,
    name: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCardsSubscriptionVariables = {
  filter?: ModelSubscriptionCardsFilterInput | null,
};

export type OnDeleteCardsSubscription = {
  onDeleteCards?:  {
    __typename: "Cards",
    id: string,
    name: string,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
  owner?: string | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    text: string,
    complete: boolean,
    card: number,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    text: string,
    complete: boolean,
    card: number,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    text: string,
    complete: boolean,
    card: number,
    priority?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
