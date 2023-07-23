export const SaveButton = ({handleOnSavePress}) => {
        return (
          <button
            onClick={() => {
              handleOnSavePress();
            }}
          >
            save
          </button>
        );
      };
      