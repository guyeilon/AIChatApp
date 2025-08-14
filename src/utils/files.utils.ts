export const downloadFile = (url: string, name: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', name);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const isFileTypeValid = (
  file: File,
  supportedTypes: string[] = [],
): boolean => supportedTypes.includes(file.type);

export const isFileSizeValid = (file: File, maxSize: number): boolean =>
  file.size <= maxSize;

export const removeFileFromFileList = (files: FileList, index: number) => {
  const dt = new DataTransfer();
  if (!files) return null;
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    if (index !== i) dt.items.add(file);
  }

  return dt.files;
};
