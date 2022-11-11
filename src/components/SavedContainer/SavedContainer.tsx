import './SavedContainer.css';
import ApiCard from '../ApiCard/ApiCard'

interface Api {
  id: string;
  title: string;
  description: string;
  auth: string;
  https: boolean;
  cors: string;
  url: string;
  category: string;
}

interface SavedContainerProps {
  savedApis: Api[];
  addSavedApi: (newApi: Api) => void;
  deleteSavedApi: (id: string) => void;
  isApiSaved: (id: string) => boolean;
}

const SavedContainer = ({ savedApis, addSavedApi, deleteSavedApi, isApiSaved }: SavedContainerProps) => {
  const savedApisList = savedApis.map(api => {
    return (
      <ApiCard
        key={api.id}
        api={api}
        addSavedApi={addSavedApi}
        deleteSavedApi={deleteSavedApi}
        isApiSaved={isApiSaved}
    />
    )
  })
  return (
    <section className="saved-apis-section">
      I am SavedContainer **********************************************************
      {savedApisList}
    </section>
  );
}

export default SavedContainer;