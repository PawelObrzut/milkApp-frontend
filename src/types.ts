export interface InterfaceMilks {
  limit?: number,
  page?: number,
  count?: number
  previous?: number
  next?: number
  result: InterfaceMilk[]
};

export interface InterfaceMilk {
  name: string,
  type: string,
  storage: number,
  id: string,
}
