import { Text, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { DefaultLayout } from "../_layouts/default";

export const Content = () => {
  const api = {
    key: "33bfa46ac01a0ac332200a3c9fafe94d",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt: any) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d: Date) => {
    let months = [
      "Janeiro,",
      "Fevereiro,",
      "Março,",
      "Abril,",
      "Junho,",
      "Julho,",
      "Agosto,",
      "Setembro,",
      "Outubro,",
      "Novembro,",
      "Dezembro,",
    ];
    let days = [
      "Domingo,",
      "Segunda,",
      "Terça,",
      "Quarta,",
      "Quinta,",
      "Sexta,",
      "Sabado,",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <DefaultLayout>
      <Flex
        flexDirection={["column"]}
        alignItems={["center"]}
        gap={["1rem"]}
        m="auto"
        justifyContent={["center"]}
      >
        <Input
          placeholder="Search..."
          border={["3px solid black"]}
          color={["white"]}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <Text
          color={["#fff"]}
          fontSize={["3rem"]}
          fontWeight={["bold"]}
          fontFamily={["Press Start 2P"]}
          textShadow={["3px 3px #3c3c3c"]}
        >
          {/* {weather.name} */}
        </Text>
        <Text color={["#fff"]} fontSize={["1rem"]} fontWeight={["thin"]}>
          {dateBuilder(new Date())}
        </Text>
        <Text color={["#fff"]} fontSize={["4rem"]} fontWeight={["bold"]}>
          9ºC
        </Text>
        <Text color={["#fff"]} fontSize={["2rem"]} fontWeight={["medium"]}>
          Sabado
        </Text>
      </Flex>
    </DefaultLayout>
  );
};
