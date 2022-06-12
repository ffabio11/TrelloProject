import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  label: {
    width: "100%",
    maxWidth: "100px",
    minHeight: "10px",
    borderRadius: 12,
    cursor: "pointer",
  },
  labelContainer: {
    display: "flex",
  },
}));

export function CardLabel({ labels }) {
  const classes = useStyles();
  return (
    <div className={classes.labelContainer}>
      {labels.map((el) => {
        return (
          <span
            className={classes.label}
            style={{ backgroundColor: el.priority }}
            title={el.category}
          />
        );
      })}
    </div>
  );
}
