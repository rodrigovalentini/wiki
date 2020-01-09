import React from "react";
import Avatar from "@atlaskit/avatar";
import DropdownMenu, {
  DropdownItemGroup,
  DropdownItem
} from "@atlaskit/dropdown-menu";
import styled from "styled-components";
import { data } from "./data";
import Button from "@atlaskit/button";

function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
}

const NameWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  margin-right: 8px;
`;

export const createHead = withWidth => {
  return {
    cells: [
      {
        key: "id",
        content: "Id",
        isSortable: false,
        width: withWidth ? 5 : undefined
      },
      {
        key: "type",
        content: "Tipo",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 25 : undefined
      },
      {
        key: "title",
        content: "Título",
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 54 : undefined
      },

      {
        key: "more",
        content: "Ação"
      }
    ]
  };
};

export const head = createHead(true);

export const rows = data.map((president, index) => ({
  key: `row-${index}-${president.nm}`,
  cells: [
    {
      key: createKey(president.nm),
      content: president.id
    },
    {
      key: createKey(president.pp),
      content: president.pp
    },
    {
      key: president.id,
      content: president.tm
    },

    {
      content: (
        <div>
          <Button className="mr-2" type="submit" appearance="link">
            Ver
          </Button>
          <Button className="mr-2" type="submit" appearance="link">
            Editar
          </Button>
          <Button className="mr-2" type="submit" appearance="link">
            Excluir
          </Button>
        </div>
      )
    }
  ]
}));
