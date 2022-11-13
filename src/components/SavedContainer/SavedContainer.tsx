import { useState } from 'react';
import { Api, SavedContainerProps } from '../../model';
import './SavedContainer.css';
import ApiCard from '../ApiCard/ApiCard';

const SavedContainer = ({ savedApis, addSavedApi, deleteSavedApi, isApiSaved }: SavedContainerProps) => {
  const [search, setSearch] = useState<string>('');
  
  const savedApisList = savedApis
    .reduce((acc: Api[], api) => {
      if (api.title.toLowerCase().includes(search.toLowerCase()) || api.description.toLowerCase().includes(search.toLowerCase())) {
        acc.push(api);
      }
      return acc;
    }, [])
    .map(api => {
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

    let noMatchText = '';
    if (savedApis.length && !savedApisList.length) {
      noMatchText = 'None of your saved APIs contain those keywords... try searching something different!'
    }

  return (
    <section className='saved-apis-section'>
      {!savedApis.length && <h2 className='no-saved-text'>You haven't saved any APIs, yet!</h2>}
      <input
          className={savedApis.length ? 'saved-search' : 'hidden'}
          type='text'
          name='saved-search'
          value={search}
          placeholder='Search Your Saved APIs!'
          onChange={(event) => setSearch(event.target.value)}
        />
        {noMatchText && <h3 className='no-match-msg'>{noMatchText}</h3>}
      <div className='saved-api-grid'>
        {savedApisList}
      </div>
    </section>
  );
}

export default SavedContainer;