export const LOAD_INITIAL_DATA = 'app/LOAD_INITIAL_DATA';
export const LOAD_INITIAL_DATA_INPROGRESS = 'app/LOAD_INITIAL_DATA_INPROGRESS';
export const LOAD_INITIAL_DATA_SUCCESS = 'app/LOAD_INITIAL_DATA_SUCCESS';
export const LOAD_INITIAL_DATA_FAILED = 'app/LOAD_INITIAL_DATA_FAILED';

export const loadInitialData = () => {
  return {
    type: LOAD_INITIAL_DATA
  };
};

export const loadInitialDataInProgress = () => {
  return {
    type: LOAD_INITIAL_DATA_INPROGRESS
  };
};

export const loadInitialDataSuccess = () => {
  return {
    type: LOAD_INITIAL_DATA_SUCCESS
  };
};

export const loadInitialDataFailed = () => {
  return {
    type: LOAD_INITIAL_DATA_FAILED
  };
};
