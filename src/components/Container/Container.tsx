import './Container.css';
import ApiCard from '../ApiCard/ApiCard';

interface Api {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

interface ContainerProps {
  apis: Api[];
  selected: string[];
  keyword: string;
}

const Container = ({ apis, selected, keyword }: ContainerProps) => {
  let apiList = [];

  if (!keyword && !selected.length) {
    apiList = apis.map((api, index) => {
      return (
        <ApiCard
          key={index}
          title={api.API}
          description={api.Description}
          category={api.Category}
        />
      )
    });
  } else if (selected.length) {
    apiList = apis.reduce((acc: Api[], api, index) => {
      if (selected.includes(api.Category)) {
        acc.push(api)
      }
      return acc;
    }, [])
    .reduce((acc: JSX.Element[], api, index) => {
      if (api.API.toLowerCase().includes(keyword.toLowerCase()) || api.Description.toLowerCase().includes(keyword.toLowerCase())) {
        const uniqueKey = Date.now() + index;
        acc.push(
        <ApiCard
          key={uniqueKey}
          title={api.API}
          description={api.Description}
          category={api.Category}
        />)
      }
      return acc;
    }, []);
  } else {
    apiList = apis.reduce((acc: JSX.Element[], api, index) => {
      if (api.API.toLowerCase().includes(keyword.toLowerCase()) || api.Description.toLowerCase().includes(keyword.toLowerCase())) {
        const uniqueKey = Date.now() + index;
        acc.push(
        <ApiCard
          key={uniqueKey}
          title={api.API}
          description={api.Description}
          category={api.Category}
        />)
      }
      return acc;
    }, []);
  }

  return (
    <section>
      <h2>{apiList.length} APIs Remain...</h2>
      {/* on button click, apiList is displayed! */}
      {apiList}
    </section>
  );
}

export default Container;