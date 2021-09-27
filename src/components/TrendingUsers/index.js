import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaRegUser, FaStar } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { CardsContainers, Card, Title } from './styled';
import { TrendingUsersFakeData } from '../../services/test-database';

export default function TrendingUsers() {
  const pageTitle = 'Treding Users';

  const [data, setData] = useState([]);
  const [firstRequest, setFirstRequest] = useState([]);
  const [secondRequest, setSecondRequest] = useState([]);
  const [thirdRequest, setThirdRequest] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchText = useSelector((state) => state.searchReducer.searchText);

  const makeFirstRequest = async () => {
    setIsLoading(true);

    try {
      const year = new Date().getFullYear();
      const month = `00${new Date().getMonth() + 1}`.slice(-2);
      const day = '01';
      const date = `${year}-${month}-${day}`;

      const response = await axios.get(
        `/search/users?q=${searchText}in:name created:${date} sort:followers&per_page=3&page=1`
      );
      if (response.data.items === 0) {
        setData(TrendingUsersFakeData);
        setIsLoading(false);
      } else {
        setFirstRequest(response.data.items);
      }
    } catch {
      setData(TrendingUsersFakeData);
      setIsLoading(false);
    }
  };

  const makeSecondRequest = async () => {
    const temp = [];
    // eslint-disable-next-line no-restricted-syntax
    for await (const item of firstRequest) {
      try {
        const response = await axios.get(`/users/${item.login}`);
        temp.push(response.data);
      } catch {
        setData(TrendingUsersFakeData);
        setIsLoading(false);
      }
    }

    if (temp.length > 0) {
      setSecondRequest(temp);
    } else {
      setData(TrendingUsersFakeData);
      setIsLoading(false);
    }
  };

  const makeThirdReuqest = async () => {
    const temp = [];
    // eslint-disable-next-line no-restricted-syntax
    for await (const item of firstRequest) {
      try {
        const response = await axios.get(
          `/search/repositories?q=user:${item.login}&sort=stars&order=desc&per_page=1&page=1`
        );
        temp.push(response.data.items[0]);
      } catch {
        setData(TrendingUsersFakeData);
        setIsLoading(false);
      }
    }

    if (temp.length > 0) {
      setThirdRequest(temp);
    } else {
      setData(TrendingUsersFakeData);
      setIsLoading(false);
    }
  };

  const formatData = () => {
    const temp = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 3; i++) {
      temp.push({
        photo: secondRequest[i].avatar_url,
        email: secondRequest[i].email,
        followers: secondRequest[i].followers,
        name: secondRequest[i].name
          ? secondRequest[i].name
          : secondRequest[i].login,
        profile: secondRequest[i].html_url,
        project: {
          name: thirdRequest[i].name,
          stars: thirdRequest[i].stargazers_count,
          desc: thirdRequest[i].description ? thirdRequest[i].description : '-',
        },
      });
    }
    setData(temp);
    setIsLoading(false);
  };

  const resetVariables = () => {
    setIsLoading(true);
    setData([]);
    setThirdRequest([]);
    setSecondRequest([]);
    setFirstRequest([]);

    makeFirstRequest();
  };

  useEffect(() => {
    resetVariables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    if (isLoading && thirdRequest.length > 0) {
      formatData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thirdRequest]);

  useEffect(() => {
    if (isLoading && secondRequest.length > 0) {
      makeThirdReuqest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondRequest]);

  useEffect(() => {
    if (isLoading && firstRequest.length > 0) {
      makeSecondRequest();
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
        {data.map((d) => (
          <Card key={d.name} bgImg={d.photo}>
            <img src={d.photo} alt={`${d.nome}-profile`} />
            <span id="name">{d.name}</span>
            <span id="email">{d.email ? d.email : '-'}</span>
            <span id="followers">
              <FaRegUser />{' '}
              <small>
                <span id="numbers">{d.followers}</span> Followers
              </small>
            </span>

            <div id="separator" />

            <div id="project-container">
              <div id="project-title">
                <span>{d.project.name}</span>
                <div>
                  <FaStar />
                  <span>{d.project.stars}</span>
                </div>
              </div>
              <div id="project-desc">
                {d.project.desc.length > 40
                  ? `${d.project.desc.substring(0, 40)}...`
                  : d.project.desc}
              </div>
            </div>

            <div id="button-container">
              <a href={d.profile} target="_blank" rel="noreferrer">
                Open Profile
              </a>
            </div>
          </Card>
        ))}
      </CardsContainers>
    </Container>
  );
}
