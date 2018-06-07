import styled from 'styled-components';

const activeLink = `
  color: #03a9f4;
  background-color: white;
  border-top: 3px solid #03a9f4;

  g {
    fill: #03a9f4;
  }
`;
const inactiveLink = `
  text-decoration: none;
  color: #212121;
`;

export const Container = styled.div`
  display: block;
  min-height: 40px;
  height: 40px;
  width: 100%;
  background-color: #bdbdbd;
  margin-top: 0;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #616161;
`;

export const List = styled.ol`
  height: 100%;
`;

export const ListItem = styled.li`
  display: inline-block;
  height: 39px;
  width: 25%;
  padding: 0;
  ${props => (props.active ? activeLink : inactiveLink)} svg {
    height: 100%;
    width: 20px;
    float: left;
    padding-top: 4%;
    padding-left: 25%;
    padding-right: 2%;
  }
`;

export const Name = styled.div`
  margin: 0;
`;
