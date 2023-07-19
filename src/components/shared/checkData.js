export const checkData = (
  value = "",
  navigate = () => {},
  targetNavigator = "/",
  isRepository = false
) => {
  navigate(`../${targetNavigator}`, { replace: true });
};
