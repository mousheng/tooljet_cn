import React, { useRef, useState } from 'react';
import * as Icons from '@ant-design/icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';
import { VirtuosoGrid } from 'react-virtuoso';
import { SearchBox } from '@/_components/SearchBox';
import { Button, ConfigProvider, theme } from 'antd';
const { darkAlgorithm, compactAlgorithm } = theme;


export const AntIcon = ({ value, onChange }) => {
    const IconElement = Icons[value];
    const [searchText, setSearchText] = useState('');
    const [showPopOver, setPopOverVisibility] = useState(false);
    const iconList = useRef(Object.keys(_.pickBy(Icons, (item) =>
        item?.render ? true : false
    )));
    const searchIcon = (text) => {
        if (searchText === text) return;
        setSearchText(text);
    };
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const filteredIcons =
        searchText === ''
            ? iconList.current
            : iconList.current.filter((icon) => icon?.toLowerCase().includes(searchText ? searchText.toLowerCase() : ''));

    const onIconSelect = (icon) => {
        onChange(icon)
    };
    const darkTheme = {
        algorithm: [darkAlgorithm, compactAlgorithm],
    };
    const eventPopover = () => {
        return (
            <Popover
                id="popover-basic"
                style={{ width: '460px', maxWidth: '460px' }}
                className={'shadow icon-widget-popover'}
            >
                <Popover.Header>
                    <SearchBox onSubmit={searchIcon} width="100%" placeholder='搜索' />
                </Popover.Header>
                <Popover.Body>
                    <div className="row">
                        {
                            <VirtuosoGrid
                                style={{ height: 300 }}
                                totalCount={filteredIcons.length}
                                listClassName="icon-list-wrapper"
                                itemClassName="icon-list"
                                itemContent={(index) => {

                                    if (filteredIcons[index] === undefined || filteredIcons[index] === 'createReactComponent')
                                        return null;
                                    // eslint-disable-next-line import/namespace
                                    const IconElement = Icons[filteredIcons[index]];
                                    return (
                                        <div
                                            className="ant-icon-element p-2"
                                            onClick={() => {
                                                onIconSelect(filteredIcons[index]);
                                                setPopOverVisibility(false);
                                            }}
                                        >
                                            <IconElement
                                                color={'#000'}
                                                stroke={3}
                                                strokeLinejoin="miter"
                                                style={{ width: '24px', height: '24px' }}
                                                alt='fg'
                                                title={filteredIcons[index]}
                                            />
                                        </div>
                                    );
                                }}
                            />
                        }
                    </div>
                </Popover.Body>
            </Popover>
        );
    };
    return (
        <>
            <div className="card mb-3">
                <div className="card-body p-0" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="field">
                        <OverlayTrigger
                            trigger="click"
                            placement={'left'}
                            show={showPopOver}
                            onToggle={(showing) => setPopOverVisibility(showing)}
                            rootClose={true}
                            overlay={eventPopover()}
                        >
                            <div className="row p-2" role="button">
                                <div className="col-auto">
                                    <IconElement
                                        color={'#000'}
                                        stroke={2}
                                        strokeLinejoin="miter"
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                </div>
                                <div className="col text-truncate">{value}</div>
                            </div>

                        </OverlayTrigger>
                    </div>
                    <CopyToClipboard
                        text={value}
                        onCopy={() => {
                            toast.success('已复制', { position: 'top-center' });
                        }}
                    >
                        <ConfigProvider
                            theme={darkMode ? darkTheme : null}
                        >
                            <Button size='large' >
                                复制
                            </Button>
                        </ConfigProvider>

                    </CopyToClipboard>
                </div>
            </div>
        </>
    );
};
