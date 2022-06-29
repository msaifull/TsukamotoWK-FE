import React from "react";
import {
  CloseButton,
  Figure,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Button from "../../components/Button";
import SelectBox from "../../components/SelectBox";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function EventsForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
  lists,
  handleChangeKeyPoint,
  handlePlusKeyPoint,
  handleMinusKeyPoint,
}) {
  return (
    <Form className="mb-2">
      <TextInputWithLabel
        placeholder={"Masukan judul"}
        label={"Judul"}
        name="title"
        value={form.title}
        type="text"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan Harga"}
        label={"Harga"}
        name="price"
        value={form.price}
        type="number"
        onChange={handleChange}
      />

      <TextInputWithLabel
        placeholder={"Masukan Stock"}
        label={"Stock"}
        name="stock"
        value={form.stock}
        type="number"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan Tanggal Acara"}
        label={"Tanggal"}
        name="date"
        value={form.date}
        type="datetime-local"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan About"}
        label={"About"}
        name="about"
        value={form.about}
        type="text"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan Tempat Acara"}
        label={"Tempat acara"}
        name="venueName"
        value={form.venueName}
        type="text"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukkan tagline"}
        label={"Tagline"}
        name="tagLine"
        value={form.tagLine}
        type="text"
        onChange={handleChange}
      />
      <Form.Label>Key Point</Form.Label>
      {form.keyPoint.map((key, index) => (
        <InputGroup className="mb-3" key={index}>
          <FormControl
            placeholder="Masukan Key Point"
            value={key}
            type="text"
            name="key"
            onChange={(e) => {
              handleChangeKeyPoint(e, index);
            }}
          />
          {index !== 0 && (
            <InputGroup.Text id="basic-addon2">
              <CloseButton onClick={() => handleMinusKeyPoint(index)} />
            </InputGroup.Text>
          )}
        </InputGroup>
      ))}

      <Button variant="success" action={handlePlusKeyPoint} size="sm">
        Tambah KeyPoint
      </Button>

      <SelectBox
        label={"Category"}
        placeholder={"Masukan kategori"}
        name="category"
        value={form.category}
        options={lists.categories}
        isClearable={true}
        handleChange={(e) => handleChange(e)}
      />
      <SelectBox
        label={"Speaker"}
        placeholder={"Masukan speaker"}
        name="speaker"
        value={form.speaker}
        options={lists.speakers}
        isClearable={true}
        handleChange={(e) => handleChange(e)}
      />

      <TextInputWithLabel
        placeholder={"Masukan cover"}
        label={"Cover"}
        name="cover"
        // value={form.avatar}
        type="file"
        onChange={handleChange}
      />
      {form.cover !== "" && (
        <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={form.cover}
            />

            <Figure.Caption>Perview image cover</Figure.Caption>
          </Figure>
        </div>
      )}
      <Button variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Ubah" : "Simpan"}
      </Button>
    </Form>
  );
}
