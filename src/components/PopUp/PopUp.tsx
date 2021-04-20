// import React, { useState } from "react";
// import { Box } from "@theme/components/Box";
// import { Text } from "@theme/components/Text";
// import { colors } from "@theme/styles/colors";
// import styled from "styled-components";
// import { data } from "@components/PopUpButton/PopUpData";

// type usePopUpProps = {
//     data: {
//       title?: string;
//       heading?: string;
//       copy?: string;
//       text_link?: string;
//       link?: string;
//     }[];
//   };

// const PopUp = (props: usePopUpProps) => {
//     const [showPopUp, setShowPopUp] = useState(false);
//     const [showButton, setShowButton] = useState(true);
  
//     const handlePopUp = () => {
//       setShowPopUp(!showPopUp);
//       setShowButton(!showButton);
//     };

//     const { data } = props;
//     return (
//         <Box
//         minWidth="150px"
//         height="300px"
//         backgroundColor={`${colors.pinkOrange}`}
//         color={`${colors.primaryWhite}`}
//         mt={6}
//         p={2}
//         borderRadius="10px"
//         position="absolute"
//       >
//         <Text variant="mediumText">{data.title}</Text>
//         <button aria-label="Close PopUp" onClick={handlePopUp}>
//           x
//         </button>
//       </Box>
//     )
// }

// export default PopUp
