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

export interface ApiContainerProps {
  apis: Api[];
  selected: string[];
  keyword: string;
  auth: string;
  https: string;
  cors: string;
  loading: () => boolean;
  addSavedApi: (newApi: Api) => void;
  deleteSavedApi: (id: string) => void;
  isApiSaved: (id: string) => boolean;
}

export interface ApiCardProps {
  api: Api;
  addSavedApi: (newApi: Api) => void;
  deleteSavedApi: (id: string) => void;
  isApiSaved: (id: string) => boolean;
}

export interface DogDisplayProps {
  url: string;
}

export interface MultiSelectProps {
  categoryError: string;
  categories: string[];
  selected: string[];
  setSelected: Dispatch<React.SetStateAction<string[]>>;
}

export interface SavedContainerProps {
  savedApis: Api[];
  addSavedApi: (newApi: Api) => void;
  deleteSavedApi: (id: string) => void;
  isApiSaved: (id: string) => boolean;
}

export interface SearchProps {
  categoryError: string;
  categories: string[];
  selected: string[];
  keyword: string;
  auth: string;
  cors: string;
  https: string;
  setSelected: Dispatch<React.SetStateAction<string[]>>;
  setKeyword: Dispatch<React.SetStateAction<string>>;
  setAuth: Dispatch<React.SetStateAction<string>>;
  setHttps: Dispatch<React.SetStateAction<string>>;
  setCors: Dispatch<React.SetStateAction<string>>;
}