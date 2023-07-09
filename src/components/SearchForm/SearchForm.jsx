import css from './SearchForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const SearchForm = ({ onSubmit }) => {

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.elements.query.value;
    //console.log(searchValue)
    if (searchValue.trim() === '') {
      Notify.warning('Enter your request, please...');
      return;
    };
    onSubmit(searchValue);
    form.reset();
  };

  return (
    <div>
      <form className={css.search__form} action="" onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Search movie" autoComplete="off"
          autoFocus name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};


Notify.init({
width: '500px',
fontSize: '20px',
position: 'right-top',
closeButton: false,
});


export default SearchForm;













/* const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    queryValue = form.elements.query.value;

     if (queryValue.trim() === '') {
    alert('Enter your request, please!');
    return;
    
    handleSubmit(queryValue);
    form.reset();
  };
  }*/