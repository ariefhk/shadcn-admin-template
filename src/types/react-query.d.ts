import { QueryOptions, useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";

// this to make full typed react query func
export type ApiServiceErr = any;
export type MutationOpt<Response, TVariables = unknown> = UseMutationOptions<Response, ApiServiceErr, TVariables, unknown>;
export type QueryOpt<Response, TVariables = unknown> = UseQueryOptions<Response, ApiServiceErr, TVariables, any[]>;
