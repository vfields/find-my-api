import { SavedContainerProps } from '../../model';
import './SavedContainer.css';
import ApiCard from '../ApiCard/ApiCard';

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
  });

  return (
    <section className='saved-apis-section'>
      {!savedApisList.length && <h2 className='no-saved-text'>You haven't saved any APIs, yet!</h2>}
      <div className='saved-api-grid'>
        {savedApisList}
      </div>
    </section>
  );
}

export default SavedContainer;