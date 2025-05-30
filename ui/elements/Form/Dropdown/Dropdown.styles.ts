import styled from 'styled-components';

import Button from '../../Button';

export const StyledDropdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-family: var(--font-family);
`;

export const StyledDropdownTrigger = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledCustomTrigger = styled.div`
    height: fit-content;
    width: fit-content;
`;
