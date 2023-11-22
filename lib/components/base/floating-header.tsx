/* eslint-disable */
import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Collapse,
  Flex,
  Image,
  Img,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DownloadCSVModel from '../models/download-csv';

import { Field, Formik } from 'formik';

import Select, { OptionsType } from '../base/select';
import FunnelSort from './funnel-sort-by';
import PricingFilter from './pricing-filter';

const categories: OptionsType = [
  {
    key: 'Capsules',
    value: 'Capsules',
    label: 'Capsules',
  },
  {
    key: 'Edibles',
    value: 'Edibles',
    label: 'Edibles',
  },
  {
    key: 'Tinctures',
    value: 'Tinctures',
    label: 'Tinctures',
  },
  {
    key: 'Flowers',
    value: 'Flowers',
    label: 'Flowers',
  },
  {
    key: 'Drinks',
    value: 'Drinks',
    label: 'Drinks',
  },
];
const manufacturers: OptionsType = [
  {
    key: 'Cresco Labs',
    value: 'Cresco Labs',
    label: 'Cresco Labs',
  },
  {
    key: 'Aphira Inc',
    value: 'Aphira Inc',
    label: 'Aphira Inc',
  },
  {
    key: 'Steep Hill, INC',
    value: 'Steep Hill, INC',
    label: 'Steep Hill, INC',
  },
  {
    key: 'Trulieve Canabis',
    value: 'Trulieve Canabis',
    label: 'Trulieve Canabis',
  },
  {
    key: 'MariMed Inc',
    value: 'MariMed Inc',
    label: 'MariMed Inc',
  },
];

interface BreadcrumbItems {
  label: string;
  breadcrumLink: string;
}
interface SearchWithFilterOptionsItems {
  label: string;
}

interface FloatingHeaderProps {
  title?: string;
  itemCount?: string;
  csvImage?: boolean;
  csvDownLoadModel?: boolean;
  refreshImage?: boolean;
  breadcrumbs?: BreadcrumbItems[];
  lastBreadcrumbColor?: string;
  simpleSearch?: boolean;
  sortBy?: boolean;
  productFilter?: boolean;
  addButtons?: boolean;
  addNew?: string;
  addSingleButtons?: boolean;
  addBulk?: string;
  filter1?: string;
  filter2?: string;
  filterButton?: boolean;
  searchWithFilters?: boolean;
  searchWithFiltersPlaceholder?: string;
  searchWithFilterOptions?: SearchWithFilterOptionsItems[];
  addLink?: string;
  productDetail?: boolean;
  editDetail?: boolean;
  editLink?: string;
  printImage?: boolean;
  cancelLink?: string;
  confirmLink?: string;
  primaryButton?: boolean;
  secondaryButton?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  statusFilter?: boolean;
  simplePlaceHolderSearch?: string;
  addNewStore?: boolean;
  addStore?: string;
  createEmployeeGroup?: boolean;
  createEmployeeGroupLink?: string;
  deleteEmployeeGroup?: boolean;
}

const FloatingHeader: React.FC<FloatingHeaderProps> = ({
  title,
  itemCount,
  csvImage,
  csvDownLoadModel,
  refreshImage,
  breadcrumbs,
  lastBreadcrumbColor,
  simpleSearch,
  sortBy,
  addButtons,
  addNew,
  statusFilter,
  productDetail,
  addBulk,
  productFilter,
  filter1,
  addSingleButtons,
  filter2,
  printImage,
  filterButton,
  searchWithFilters,
  searchWithFiltersPlaceholder,
  searchWithFilterOptions,
  addLink,
  editDetail,
  editLink,
  confirmLink,
  cancelLink,
  primaryButton,
  simplePlaceHolderSearch,
  addNewStore,
  addStore,
  createEmployeeGroup,
  createEmployeeGroupLink,
  deleteEmployeeGroup,
}) => {
  const constructedHref = `/${addLink}`;
  const constructedHref1 = `/${editLink}`;
  const constructedHref2 = `/${cancelLink}`;
  const constructedHref3 = `/${confirmLink}`;
  const constructedHref4 = `/${addStore}`;
  const constructedHref5 = `/${createEmployeeGroupLink}`;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();
  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const [isAllActive, setAllActive] = useState(false);
  const [isFilter1Active, setFilter1Active] = useState(false);
  const [isFilter2Active, setFilter2Active] = useState(false);

  const toggleButton = (button: any) => {
    switch (button) {
      case 'all':
        setAllActive(!isAllActive);
        break;
      case 'filter1':
        setFilter1Active(!isFilter1Active);
        break;
      case 'filter2':
        setFilter2Active(!isFilter2Active);
        break;
      default:
        break;
    }
  };
  return (
    <Box
      background="#ffffff"
      h={{
        base: 'auto',
        md: 'auto',
      }}
      mt="-4em"
      pb="1em"
      position="relative"
      mr="20px"
      w="100%"
      borderRadius="0px 20px 20px 0px"
    >
      <Formik
        initialValues={{
          selectedOption: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <form>
            <Image
              src="/images/arrow-side1.png"
              alt="arrow"
              bottom="-1.36em"
              position="absolute"
              left="-2px"
              w="20px"
            />
            <Box
              display={{
                base: 'grid',
                md: 'flex',
              }}
              w="100%"
            >
              <Box
                w={{
                  base: '100%',
                  md: '50%',
                }}
                m="2em"
              >
                <Flex gap="12px">
                  <Text
                    fontWeight="400"
                    color="#41454B"
                    fontSize="16px"
                    className="primary-font-semibold"
                  >
                    {title}
                  </Text>
                  <Text
                    fontWeight="400"
                    color="#FF8A43"
                    mt="4px"
                    fontSize="12px"
                    className="primary-font-extraBold"
                  >
                    {itemCount}
                  </Text>
                </Flex>
                <Breadcrumb
                  spacing="4px"
                  separator={<ChevronRightIcon color="#000000" />}
                >
                  {breadcrumbs?.map((breadcrumb, index) => (
                    <BreadcrumbItem key={index}>
                      <Link href={breadcrumb.breadcrumLink}>
                        {index === breadcrumbs.length - 1 ? (
                          <Text
                            color={lastBreadcrumbColor}
                            fontSize="13px"
                            className="primary-font-semi-bold-italic"
                          >
                            {breadcrumb.label}
                          </Text>
                        ) : (
                          breadcrumb.label
                        )}
                      </Link>
                    </BreadcrumbItem>
                  ))}
                </Breadcrumb>
                {addNewStore && (
                  <Link href={constructedHref4}>
                    <Button
                      p="10px 18px"
                      mt="1.5em"
                      className="primary-font-semibold"
                      color="#fff"
                      fontSize="12px"
                      bg="linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)"
                      borderRadius="7px"
                      _hover={{
                        bg: 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                      }}
                    >
                      <Img src="/images/shop-add.png" mr="5px" w="16px" />
                      Add New Store
                    </Button>
                  </Link>
                )}
                {editDetail && (
                  <Link href={constructedHref1}>
                    <Button
                      p="10px 18px"
                      mt="1.5em"
                      className="primary-font-semibold"
                      color="#fff"
                      fontSize="12px"
                      bg="linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)"
                      borderRadius="7px"
                      _hover={{
                        bg: 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                      }}
                    >
                      <Img src="/images/edit.png" mr="5px" w="16px" />
                      Edit Details
                    </Button>
                  </Link>
                )}
                {productDetail && (
                  <Flex mt="1.5em" gap="10px">
                    <Link href={constructedHref2}>
                      <Button
                        p="10px 40px"
                        className="primary-font-semibold"
                        color="rgba(18, 23, 30, 0.50)"
                        fontSize="12px"
                        bg="transparent"
                        border="0.3px solid rgba(18, 23, 30, 0.50)"
                        borderRadius="7px"
                        _hover={{
                          bg: 'transparent',
                        }}
                      >
                        Cancel
                      </Button>
                    </Link>
                    <Link href={constructedHref3}>
                      <Button
                        p="10px 40px"
                        className="primary-font-semibold"
                        color="#fff"
                        fontSize="12px"
                        bg="#FF8A43"
                        border="2px solid #FFD8C0;"
                        borderRadius="7px"
                        _hover={{
                          bg: '#FF8A43',
                        }}
                      >
                        Confirm Edit
                      </Button>
                    </Link>
                  </Flex>
                )}
                {searchWithFilters && (
                  <Flex gap="20px" mt="2em">
                    <Flex>
                      {/* <Select
                        placeholder={searchWithFiltersPlaceholder}
                        w="170px"
                        borderRadius="4px 0px 0px 4px"
                      >
                        {searchWithFilterOptions?.map(
                          (filterItem: any, index: Key | null | undefined) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <option key={index}>
                              <Text
                                color="#41454B"
                                fontSize="12px"
                                className="primary-font-medium"
                              >
                                {filterItem.label}
                              </Text>
                            </option>
                          )
                        )}
                      </Select> */}
                      <Input
                        placeholder="Search here ..."
                        background="#E9F0F8"
                        className="primary-font-semibold"
                        fontSize="12px"
                        h="40px"
                        w={{
                          base: '250px',
                          md: '332px',
                        }}
                        _placeholder={{
                          color: '#41454B',
                        }}
                        color="#41454B"
                        borderRadius="0px 4px 4px 0"
                      />
                    </Flex>
                    <Box cursor="pointer">
                      <Image
                        src="/images/search-orange.png"
                        width={10}
                        height={10}
                        alt="logo"
                      />
                    </Box>
                  </Flex>
                )}
                {simpleSearch && (
                  <Flex gap="12px" mt="2em">
                    <Input
                      placeholder={simplePlaceHolderSearch}
                      background="#E9F0F8"
                      className="primary-font-semibold"
                      fontSize="12px"
                      h="40px"
                      w={{
                        base: '250px',
                        md: '332px',
                      }}
                      _placeholder={{
                        color: '#41454B',
                      }}
                      color="#41454B"
                      borderRadius="4px"
                    />
                    <Box cursor="pointer">
                      <Image
                        src="/images/search-orange.png"
                        width={10}
                        height={10}
                        alt="logo"
                      />
                    </Box>
                  </Flex>
                )}
              </Box>
              <Box
                w={{
                  base: '100%',
                  md: '50%',
                }}
                m="2em"
              >
                <Flex
                  justifyContent={{
                    base: 'start',
                    md: 'end',
                  }}
                  flexWrap={'wrap'}
                  mt="0.8em"
                  gap="10px"
                >
                  {addSingleButtons && (
                    <Link href={constructedHref}>
                      <Button
                        display="flex"
                        background=" linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)"
                        borderRadius="4px"
                        color="#ffffff"
                        fontSize="12px"
                        className="primary-font-medium"
                        _hover={{
                          background:
                            'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                        }}
                        gap="10px"
                      >
                        <Image
                          src="/images/plus-square.png"
                          alt="refresh-circle"
                          w="15px"
                          cursor="pointer"
                          h="15px"
                        />
                        Add New {addNew}
                      </Button>
                    </Link>
                  )}
                  {addButtons && (
                    <>
                      <Button
                        display="flex"
                        background="transparent"
                        borderRadius="4px"
                        border="1px solid #41454B"
                        color="#41454B"
                        fontSize="12px"
                        className="primary-font-medium"
                        _hover={{
                          background: 'transparent',
                        }}
                        gap="10px"
                      >
                        <Image
                          src="/images/add-bulk.png"
                          alt="refresh-circle"
                          w="15px"
                          cursor="pointer"
                          h="15px"
                        />
                        Add Bulk {addBulk}
                      </Button>
                      <Link href={constructedHref}>
                        <Button
                          display="flex"
                          background={
                            isActive('/admin/inventory/categories/add-category')
                              ? '#BBC0C4'
                              : ' linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)'
                          }
                          borderRadius="4px"
                          color="#ffffff"
                          fontSize="12px"
                          className="primary-font-medium"
                          _hover={{
                            background:
                              'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                          }}
                          gap="10px"
                        >
                          <Image
                            src="/images/plus-square.png"
                            alt="refresh-circle"
                            w="15px"
                            cursor="pointer"
                            h="15px"
                          />
                          Add New {addNew}
                        </Button>
                      </Link>
                    </>
                  )}
                  {refreshImage && (
                    <Image
                      src="/images/refresh-circle.png"
                      alt="refresh-circle"
                      w="38px"
                      cursor="pointer"
                      h="38px"
                    />
                  )}
                  {printImage && (
                    <Image
                      src="/images/print.png"
                      alt="refresh-circle"
                      w="38px"
                      cursor="pointer"
                      h="38px"
                    />
                  )}
                  {csvImage && (
                    <Image
                      src="/images/csv-file.png"
                      alt="csv-file"
                      w="38px"
                      cursor="pointer"
                      h="38px"
                    />
                  )}
                  {csvDownLoadModel && <DownloadCSVModel />}
                </Flex>
                <Flex
                  justifyContent={{
                    base: 'start',
                    md: 'end',
                  }}
                  mt="2em"
                  flexWrap="wrap"
                  gap="10px"
                >
                  {productFilter && (
                    <>
                      <Field
                        name="selectedOption1"
                        component={Select}
                        height="33px"
                        width="140px"
                        options={categories}
                        placeholder="Categories"
                      />
                      <Field
                        name="selectedOption2"
                        component={Select}
                        height="33px"
                        width="140px"
                        options={manufacturers}
                        placeholder="Manufaturers"
                      />
                      <PricingFilter />
                    </>
                  )}

                  {filterButton && (
                    <Flex textAlign="center" alignItems="center" gap="10px">
                      <Button
                        display="flex"
                        background={
                          isAllActive
                            ? 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)'
                            : '#E9F0F8'
                        }
                        borderRadius="4px"
                        _hover={{
                          background:
                            'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                          color: '#fff',
                        }}
                        height="24px"
                        color={isAllActive ? '#fff' : '#41454B'}
                        fontSize="12px"
                        gap="5px"
                        className="primary-font-regular-italic"
                        onClick={() => toggleButton('all')}
                      >
                        All
                        <Image
                          src={
                            isAllActive
                              ? '/images/close-circle-white.png'
                              : '/images/close-circle.png'
                          }
                          alt="refresh-circle"
                          w="12px"
                          cursor="pointer"
                          h="12px"
                        />
                      </Button>

                      <Button
                        display="flex"
                        background={
                          isFilter1Active
                            ? 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)'
                            : '#E9F0F8'
                        }
                        borderRadius="4px"
                        _hover={{
                          background:
                            'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                          color: '#fff',
                        }}
                        height="24px"
                        color={isFilter1Active ? '#fff' : '#41454B'}
                        fontSize="12px"
                        gap="5px"
                        className="primary-font-regular-italic"
                        onClick={() => toggleButton('filter1')}
                      >
                        {filter1}
                        <Image
                          src={
                            isFilter1Active
                              ? '/images/close-circle-white.png'
                              : '/images/close-circle.png'
                          }
                          alt="refresh-circle"
                          w="12px"
                          cursor="pointer"
                          h="12px"
                        />
                      </Button>

                      <Button
                        display="flex"
                        background={
                          isFilter2Active
                            ? 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)'
                            : '#E9F0F8'
                        }
                        borderRadius="4px"
                        height="24px"
                        _hover={{
                          background:
                            'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                          color: '#fff',
                        }}
                        color={isFilter2Active ? '#fff' : '#41454B'}
                        fontSize="12px"
                        gap="5px"
                        className="primary-font-regular-italic"
                        onClick={() => toggleButton('filter2')}
                      >
                        {filter2}
                        <Image
                          src={
                            isFilter2Active
                              ? '/images/close-circle-white.png'
                              : '/images/close-circle.png'
                          }
                          alt="refresh-circle"
                          w="12px"
                          cursor="pointer"
                          h="12px"
                        />
                      </Button>
                    </Flex>
                  )}
                  {statusFilter && (
                    <Box position="relative">
                      <Image
                        src="/images/status.png"
                        alt="Status"
                        zIndex={1000}
                        w="95px"
                        onClick={toggleOptions}
                        cursor="pointer"
                        h="38px"
                      />

                      <Collapse in={isOpen}>
                        <Stack
                          background={'#FFF6F2'}
                          w="200px"
                          mt="3em"
                          position="absolute"
                          borderRadius="12px"
                          left="-1em"
                          top="5px"
                          zIndex="1000"
                        >
                          <Text
                            px="15px"
                            py="10px"
                            color="#2B86FF"
                            cursor="pointer"
                            _hover={{
                              background: '#2B86FF',
                              color: '#fff',
                              transition: '0.3s ease-in-out',
                            }}
                          >
                            New
                          </Text>
                          <Text
                            px="15px"
                            py="10px"
                            cursor="pointer"
                            color="#08754C"
                            _hover={{
                              background: '#08754C',
                              color: '#fff',
                              transition: '0.3s ease-in-out',
                            }}
                          >
                            Completed
                          </Text>
                          <Text
                            px="15px"
                            py="10px"
                            color="#2B86FF"
                            cursor="pointer"
                            _hover={{
                              background: '#2B86FF',
                              transition: '0.3s ease-in-out',

                              color: '#fff',
                            }}
                          >
                            Pending
                          </Text>
                          <Text
                            px="15px"
                            py="10px"
                            color="#FF2323"
                            cursor="pointer"
                            _hover={{
                              background: '#FF2323',
                              transition: '0.3s ease-in-out',

                              color: '#fff',
                            }}
                          >
                            Canceled
                          </Text>
                        </Stack>
                      </Collapse>
                    </Box>
                  )}
                  {sortBy && <FunnelSort />}
                  {primaryButton && (
                    <Link href="/admin/inventory/categories/add-subcategory">
                      <Button
                        display="flex"
                        borderRadius="4px"
                        background={
                          isActive(
                            '/admin/inventory/categories/add-subcategory'
                          )
                            ? '#BBC0C4'
                            : '#FF8A43'
                        }
                        color="#ffffff"
                        fontSize="12px"
                        className="primary-font-medium"
                        _hover={{
                          background: '#FF8A43',
                        }}
                        gap="10px"
                      >
                        <AddIcon color="white" boxSize={2} />
                        Add Sub-category
                      </Button>
                    </Link>
                  )}
                  {createEmployeeGroup && (
                    <Link href={constructedHref5}>
                      <Button
                        p="10px 18px"
                        mt="1.5em"
                        className="primary-font-semibold"
                        color="#fff"
                        fontSize="12px"
                        bg="linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)"
                        borderRadius="7px"
                        _hover={{
                          bg: 'linear-gradient(244deg, #192837 4.52%, #274D5C 83.76%)',
                        }}
                      >
                        <Img src="/images/plus-square.png" mr="5px" w="16px" />
                        Create Employee Group
                      </Button>
                    </Link>
                  )}
                  {deleteEmployeeGroup && (
                    <Button
                      p="10px 18px"
                      mt="1.5em"
                      className="primary-font-semibold"
                      color="#fff"
                      fontSize="12px"
                      bg="linear-gradient(238deg, #FF1E1E 23.36%, #FF4040 93.56%)"
                      borderRadius="7px"
                      _hover={{
                        bg: 'linear-gradient(238deg, #FF1E1E 23.36%, #FF4040 93.56%)',
                      }}
                    >
                      <Img src="/images/plus-square.png" mr="5px" w="16px" />
                      Delete Employee Group
                    </Button>
                  )}
                </Flex>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default FloatingHeader;
