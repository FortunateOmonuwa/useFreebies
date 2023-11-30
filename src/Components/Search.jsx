const Search = ({ className, type, placeholder, value, onChange }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
