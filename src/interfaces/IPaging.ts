export interface IPaging<T>
{
    currentPage: number,
    totalItems: number,
    totalPages: number,
    items: T[]
}