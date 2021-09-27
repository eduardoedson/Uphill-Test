import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { CardsContainers, Card, Title } from './styled';
import { TopRepositoriesFakeData } from '../../services/test-database';

export default function TopRepositories() {
  const pageTitle = 'Top Repositories';
  const borders = ['#2246a4', '#3382ed', '#2d9cdb', '#56ccf2'];

  const [data, setData] = useState([]);
  const [firstRequest, setFirstRequest] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchText = useSelector((state) => state.searchReducer.searchText);

  const makeFirstRequest = async () => {
    setIsLoading(true);

    try {
      const year = new Date().getFullYear();
      const month = '01';
      const day = '01';
      const date = `${year}-${month}-${day}`;

      const response = await axios.get(
        `/search/repositories?q=${searchText}in:name created:>=${date}&sort=stars&order=desc&per_page=4&page=1`
      );
      if (response.data.items === 0) {
        setData(TopRepositoriesFakeData);
        setIsLoading(false);
      } else {
        setFirstRequest(response.data.items);
      }
    } catch {
      setData(TopRepositoriesFakeData);
      setIsLoading(false);
    }
  };

  const formatData = () => {
    const temp = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 4; i++) {
      temp.push({
        name: firstRequest[i].name,
        desc: firstRequest[i].description,
        star: firstRequest[i].stargazers_count,
      });
    }
    setData(temp);
    setIsLoading(false);
  };

  const resetVariables = () => {
    setIsLoading(true);
    setData([]);
    setFirstRequest([]);

    makeFirstRequest();
  };

  useEffect(() => {
    resetVariables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    if (isLoading && firstRequest.length > 0) {
      formatData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstRequest]);

  useEffect(() => {
    makeFirstRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Title id="title">{pageTitle}</Title>
        Loading...
      </Container>
    );
  }

  if (!isLoading && data.length === 0) {
    return (
      <Container>
        <Title id="title">{pageTitle}</Title>
        No data found.
      </Container>
    );
  }

  return (
    <Container>
      <Title id="title">{pageTitle}</Title>

      <CardsContainers>
        {data.map((d, i) => (
          <Card key={d.name} borderColor={borders[i]}>
            <span id="title">{d.name}</span>
            <span id="star-container">
              <FaStar /> <span>{d.star}</span>
            </span>
            <span id="desc">
              {d.desc.length > 40 ? `${d.desc.substring(0, 40)}...` : d.desc}
            </span>
          </Card>
        ))}
      </CardsContainers>
    </Container>
  );
}
