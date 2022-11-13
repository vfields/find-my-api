import { Dispatch } from 'react';

export interface FetchedApi {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface Api {
  id: string;
  title: string;
  description: string;
  auth: string;
  https: boolean;
  cors: string;
  url: string;
  category: string;
}

interface SaveApiFunctions {
  addSavedApi: (newApi: Api) => void;
  deleteSavedApi: (id: string) => void;
  isApiSaved: (id: string) => boolean;
}

interface SearchInputs {
  selected: string[];
  keyword: string;
  auth: string;
  https: string;
  cors: string;
}

export interface ApiContainerProps extends SaveApiFunctions, SearchInputs {
  apis: Api[];
  error: string;
  loading: () => boolean;
}

export interface ApiCardProps extends SaveApiFunctions {
  api: Api;
}

export interface SearchProps extends SearchInputs {
  categoryError: string;
  categories: string[];
  setSelected: Dispatch<React.SetStateAction<string[]>>;
  setKeyword: Dispatch<React.SetStateAction<string>>;
  setAuth: Dispatch<React.SetStateAction<string>>;
  setHttps: Dispatch<React.SetStateAction<string>>;
  setCors: Dispatch<React.SetStateAction<string>>;
}

export interface MultiSelectProps {
  categoryError: string;
  categories: string[];
  selected: string[];
  setSelected: Dispatch<React.SetStateAction<string[]>>;
}

export interface SavedContainerProps extends SaveApiFunctions {
  savedApis: Api[];
}

export interface DogDisplayProps {
  url: string;
}