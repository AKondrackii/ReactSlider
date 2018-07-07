import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './Link';

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	height: 49px;
`

class Header extends React.Component {
	render() {
		return (
				<Row>
					<Col lg={12}>
						<nav>
							<List>
								<Link href="#" text="Вызов мастера" />
								<Link href="#" text="Прайс на ремонт" />
								<Link href="#" text="Наши преимущества" />
								<Link href="#" text="Схема работы" />
								<Link href="#" text="Отзывы клиентов" />
								<Link href="#" text="Примеры работ" />
								<Link href="#" text="Контакты" />
							</List>
						</nav>
					</Col>
				</Row>
			)
	}
}

export default Header