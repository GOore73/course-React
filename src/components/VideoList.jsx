const VideoList = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children || <p>Sin videos aún</p>}
    </div>
    // {children || <p>Sin videos aún</p>} este sería pregunta si children, no vacío, sale por el primer valor del or, sino hace el  <p>
  );
};

export default VideoList;
